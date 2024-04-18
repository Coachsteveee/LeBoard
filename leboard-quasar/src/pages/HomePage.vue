<template>
  <q-page class="relative-position">
    <q-header bordered class="bg-white text-black">
      <!-- <div class="q-mb-sm lt-md header-icon bungee-shade" to="/">LeBoard</div> -->

      <q-tabs dense align="justify" class="text-black q-pt-sm" :breakpoint="0">
        <q-route-tab to="/homeprojects" label="Projects" />
        <q-route-tab to="/homepage" label="Home" />
        <q-route-tab to="/homeinvitations" label="Invitations" />
      </q-tabs>
    </q-header>
    <q-scroll-area class="absolute full-width full-height">
      <!-- put this area in a grid system to have more control of things -->
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <!-- v-model binds the input to our methods function so when the user enters
        text, it is pushed into the posts array then displayed on the screen -->
          <q-input
            bottom-slots
            v-model="newPostContent"
            placeholder="What are you working on?"
            counter
            maxlength="280"
            autogrow
            class="new-Post"
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img
                  src="https://icons.iconarchive.com/icons/sykonist/looney-tunes/256/Speedy-Gonzales.png"
                />
              </q-avatar>
            </template>
          </q-input>
        </div>

        <div class="col col-shrink q-mb-lg">
          <q-btn
            @click="addNewPost"
            unelevated
            rounded
            color="primary"
            label="Post"
            no-caps
            :disable="newPost"
          />
        </div>
      </div>

      <q-separator horizontal size="10px" color="grey-2" class="divider" />
      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="fadeOut slow"
        >
          <q-item v-for="post in posts" :key="post.date" class="q-py-md">
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img
                  src="https://icons.iconarchive.com/icons/sykonist/looney-tunes/256/Porky.png"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Porky</strong>
                <span class="text-grey-7"
                  >@porky_lepig <br class="lt-md" />&bull;
                  {{ relativeDate(post.date) }}
                </span>
              </q-item-label>
              <q-item-label class="post-content text-body1">
                {{ post.content }}
              </q-item-label>

              <div class="post-icons row justify-between q-mt-sm">
                <q-btn
                  color="dark"
                  icon="far fa-comment"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                  color="dark"
                  icon="fas fa-retweet"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                  @click="toggleLiked(post)"
                  :color="post.liked ? 'pink' : 'dark'"
                  :icon="post.liked ? 'fas fa-heart' : 'far fa-heart'"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                  @click="deletePost(post)"
                  color="dark"
                  icon="fas fa-trash"
                  size="sm"
                  flat
                  round
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
      <q-separator inset="item" />
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { formatDistance } from "date-fns";
import db from "src/boot/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

defineOptions({
  name: "HomePage",
  data() {
    return {
      newPostContent: "",
      posts: [
        // {
        //   content:
        //     "¡Ándale! ¡Ándale! ¡Arriba, arriba! Speedy Gonzales here with the latest on our ¡rápido! Android app project! We've been coding ¡muy rápido! to bring you the fastest app this side of the Rio Grande!",
        //   date: 1713358461855,
        //   liked: false,
        // },
        // {
        //   content:
        //     "Be vewy, vewy quiet! I'm hunting for bugs in my new iOS pwroject! That wascawwy wabbit of an app has been weading my mind and giving me a fwightfuw headache!",
        //   date: 1713366962112,
        //   liked: true,
        // },
      ],
    };
  },
  methods: {
    async addNewPost() {
      const newPost = {
        content: this.newPostContent,
        date: Date.now(),
        liked: false,
      };
      const docRef = await addDoc(collection(db, "posts"), newPost);
      console.log("Document written with ID: ", docRef.id);
      this.posts.push(newPost);
      this.newPostContent = ""; // Reset the newPostContent after adding the post
    },
    async deletePost(post) {
      await deleteDoc(doc(db, "posts", post.id));
    },
    async toggleLiked(post) {
      const docRef = doc(db, "posts", post.id);
      await updateDoc(docRef, {
        liked: !post.liked,
      });
      console.log("Document updated");
    },
  },

  computed: {
    relativeDate() {
      return (value) => {
        return formatDistance(value, new Date());
      };
    },
  },
  mounted() {
    console.log(db);
    const q = query(collection(db, "posts"), orderBy("date"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let postChange = change.doc.data();
        postChange.id = change.doc.id;
        if (change.type === "added") {
          console.log("New post: ", postChange);
          this.posts.unshift(postChange);
        }
        if (change.type === "modified") {
          console.log("Modified post: ", postChange);
          let index = this.posts.findIndex((post) => post.id === postChange.id);
          Object.assign(this.posts[index], postChange);
        }
        if (change.type === "removed") {
          console.log("Removed post: ", postChange);
          let index = this.posts.findIndex((post) => post.id === postChange.id);
          this.posts.splice(index, 1);
        }
      });
    });
  },
});
</script>

<style lang="scss">
.new-Post textarea {
  font-size: 16px;
  font-family: $Alice;
  line-height: 1.4;
}

.divider {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: $grey-4;
}

.post-content {
  white-space: pre-line;
  font-family: $Alice;
}

.post-icons {
  margin-left: -5px;
}
</style>
