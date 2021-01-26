<template>
	<div class="px-5 py-5 transition duration-500 ease-in-out">

		<h2 class="text-4xl font-medium capitalize">example 1</h2>

    <p class="text-2xl" v-for="index in 100" :key="index">
      test line of text, test test test
    </p>

	</div>
</template>

<script src="./counter.ts"></script>
