<template>
	<div>
		<h2>我是Home的内容</h2>
		<ul>
			<router-link active-class="active" to="/Home/news">News</router-link>
			<router-link active-class="active" to="/Home/message">MEssage</router-link>
		</ul>
		<ul>
			<router-view></router-view>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'Home'
	}
</script>