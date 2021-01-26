<template>

	<nav
		class="app-dashboard-sidebar w-56 select-none overflow-y-auto
		transition duration-500 ease-in-out">

		<div class="flex flex-col items-center ">
			<h1
				class="text-2xl font-light text-pink-600 dark:text-pink-400 mt-0
				transition duration-500 ease-in-out">
				Examples
			</h1>
		</div>

    <sidebarmenu-component />

    <!--
		<ul>
			<li
				class="pl-8 py-2 font-semibold
				hover:bg-pink-200 dark-hover:bg-pink-500 mb-2 transition
				duration-500 ease-in-out">

				<button
					class="focus:text-pink-500 dark-focus:text-pink-400
					focus:outline-none w-full transition duration-500 ease-in-out">

					<span class="flex items-center">
						<svg class="h-4 w-4 fill-current" viewBox="0 0 576 512">
							<path
								d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5
								21.5 48 48.1 48h479.8c26.6 0 48.1-21.5
								48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1
								80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6
								6-6zm467.8 352H54.1c-3.3
								0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192
								332v40c0 6.6-5.4 12-12 12h-72c-6.6
								0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12
								5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6
								0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0
								12 5.4 12 12z"></path>
						</svg>
						<span class="ml-4 capitalize">my card</span>
					</span>
				</button>
			</li>
		</ul>
    -->

	</nav>
</template>

<script src="./sidebar.ts"></script>
