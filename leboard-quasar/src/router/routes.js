const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/PageHome.vue"),
        name: "Home",
      },
      {
        path: "/notifications",
        component: () => import("pages/PageNotifications.vue"),
        name: "Notifications",
      },
      {
        path: "/messages",
        component: () => import("pages/PageMessages.vue"),
        name: "Messages",
      },
      {
        path: "/bookmarks",
        component: () => import("pages/PageBookmarks.vue"),
        name: "Bookmarks",
      },
      {
        path: "/profile",
        component: () => import("pages/PageProfile.vue"),
        name: "Profile",
      },
      {
        path: "/settings",
        component: () => import("pages/PageSettings.vue"),
        name: "Settings",
      },
      {
        path: "/homepage",
        component: () => import("pages/HomePage.vue"),
        name: "HomePage",
      },
      {
        path: "/homeprojects",
        component: () => import("pages/HomeProjects.vue"),
        name: "HomeProjects",
      },
      {
        path: "/homeinvitations",
        component: () => import("pages/HomeInvitations.vue"),
        name: "HomeInvitations",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
