<template>
  <q-page>
    <!-- put this area in a grid system to have more control of things -->
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          bottom-slots
          v-model="newPost"
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
            <span class="text-grey-7">@porky_lepig</span>
          </q-item-label>
          <q-item-label class="post-content text-body1">
            {{ post.content }}
          </q-item-label>

          <div class="post-icons row justify-between q-mt-sm">
            <q-btn color="dark" icon="far fa-comment" size="sm" flat round />
            <q-btn color="dark" icon="fas fa-retweet" size="sm" flat round />
            <q-btn color="dark" icon="far fa-heart" size="sm" flat round />
            <q-btn color="dark" icon="fas fa-trash" size="sm" flat round />
          </div>
        </q-item-section>

        <q-item-section side top> {{ post.date }} </q-item-section>
      </q-item>
    </q-list>
    <q-separator inset="item" />
  </q-page>
</template>

<script>
import { formatDistance, subDays } from "date-fns";

defineOptions({
  name: "PageHome",
  data() {
    return {
      newPost: "",
      posts: [
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: 1713338928666,
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: 1713338962221,
        },
      ],
    };
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
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
