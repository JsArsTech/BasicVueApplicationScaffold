<template lang="pug">

ul.movie
	li.movie Star Wars
	li.movie Blade Runner


</template>

<script>

export default {
	data() {
		return {
			movies: [
				{ title: 'Start Wars' },
				{ title: 'Blade Runner'},
				{ title: 'Start Wars' },
				{ title: 'Blade Runner'},				
				{ title: 'Start Wars' },
				{ title: 'Blade Runner'},
				{ title: 'Start Wars' },
				{ title: 'Blade Runner'},				
			]
		}
	}
}

</script>

<style scoped>

.movies {
	list-style: none;
	padding: 12px;
	background: rgba(0, 0, 0, .1);
	border-radius: 3px;
}

.movie:not(:last-child) {
	padding-bottom: 6px;
	margin-bottom: 6px;
	border-bottom: solid 1px rgba(0, 0, 0, .1);
}

</style>