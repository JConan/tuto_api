<script>
	export let data;
</script>

<p>Posts</p>

{#each data.posts as post}
	<div class="post">
		<span>{post.title}</span>
		<span>{post.body}</span>
	</div>
{/each}

<style>
	.post {
		border: 2px solid black;
		margin: 1rem;
		padding: 0.5rem;

		/* tous sauf le last-child */
		& span:not(:last-child) {
			display: block;
			font-size: 24px;
			text-decoration: underline;
		}
	}
</style>
