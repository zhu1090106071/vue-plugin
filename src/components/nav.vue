<template>
	<div>
		<ul id="nav">
			<li>
				<router-link :to="{name : 'HelloWorld'}">
		          首页
		        </router-link>
			</li>
			<li>
				<router-link :to="{name : 'Draggable'}">
		          vuedraggable
		        </router-link>
			</li>
			<li>
				<router-link :to="{name : 'Echarts'}">
		          echarts
		        </router-link>
			</li>
		</ul>
		<div>
			
		</div>
	</div>
</template>

<style type="text/css">
	#nav{
		display: flex;
		justify-content: space-between;
	}
</style>
