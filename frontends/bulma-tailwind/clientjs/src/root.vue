<template>
  <div class="app-dashboard h-screen flex">
    <sidebar-component />
	  <main class="flex-1 overflow-y-auto transition duration-500 ease-in-out">
		  <router-view></router-view>
	  </main>
  </div>
</template>

<script src="./root.ts"></script>
