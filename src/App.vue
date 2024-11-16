<template>
  <v-layout>
    <v-app>
      <v-app-bar title="ToDo App" color="blue-lighten-5" />
      <v-main class="d-flex flex-column justify-start container ga-5 w-100 w-md-75 mx-auto mt-5">
        <RouterView />
      </v-main>
      <v-footer color="blue">
        <p>Power by Nima Parandavar</p>
      </v-footer>
    </v-app>
  </v-layout>
</template>
