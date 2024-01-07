<script lang="ts">
	export let data;
</script>

<main class="column">
	<div class="todos-container box column">
		<h1>SvelteKit Appwrite To-do App</h1>

		{#if data.todos && data.todos.length > 0}
			{#each data.todos as todo}
				<div class="todo-container column">
					<p class="title">{todo.title}</p>
					<p class="description">{todo.description}</p>
				</div>
			{/each}
		{:else}
			<p class="empty-message">There are no To-dos. Create your first one!</p>
		{/if}
	</div>

	<form method="POST" action="?/create" class="box column">
		<div class="input-container column">
			<label for="title">Title</label>
			<input type="text" name="title" />
		</div>

		<div class="input-container column">
			<label for="description">Description</label>
			<input type="text" name="description" />
		</div>

		<button>Add Todo</button>
	</form>
</main>

<style>
	main {
		margin: 0 auto;

		max-width: 480px;

		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: #3e4850;

		gap: 1em;
	}

	.box {
		padding: 1em;

		border: 1px solid #ccc;
		border-radius: 8px;
		box-shadow: 0 0 8px rgba(75, 79, 91, 0.1);
	}

	.column {
		display: flex;
		flex-direction: column;
	}

	.todos-container {
		gap: 1em;
	}

	.todo-container {
		gap: 0.2em;
	}

	.todo-container:not(:last-of-type) {
		padding-bottom: 1em;

		border-bottom: 1px solid #ccc;
	}

	.title {
		font-weight: bold;
	}

	.description {
		font-size: 0.8rem;
		color: #717378;
	}

	h1 {
		margin: 0;

		font-size: 1.5rem;
	}

	p {
		margin: 0;
	}

	form {
		gap: 0.5em;
	}

	.input-container {
		gap: 0.5em;
	}

	label {
		font-size: 0.8rem;
		color: #717378;
	}

	input {
		padding: 0.5em;

		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		padding: 0.5em;

		border: 0px;
		border-radius: 4px;
		background-color: #151c29;

		color: white;

		cursor: pointer;
	}
</style>
