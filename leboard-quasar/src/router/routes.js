const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/PageHome.vue"), name: "Home" },
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
