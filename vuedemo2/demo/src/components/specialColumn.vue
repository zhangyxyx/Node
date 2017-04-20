<template>
<div class="row">
	<div class="col-sm-9">
		<div class="special-title" style="height:60px;">
			<div class="special-title-left" style="float:left;font-size:20px;">原创文章</div>
			<div class="special-title-left" style="float:right">
				原创
			</div>
		</div>
		<div class="special-container" >
			<div v-for="con in cons" style="border-bottom:1px solid #ccc;padding:20px 0px;">
				<div style="height:30px;line-height:30px;margin-bottom:20px;">
					<span style="width:30px;height:30px;display:block;float:left;"><img :src=con.userimg style="width:100%;border-radius:50%;"></span>
					<span style="float:left;margin-left:10px;">{{con.autor}}</span>
					<span style="float:left;margin-left:10px">{{con.time}}小时前</span>
				</div>
				<span style="height:213px;display:block;overflow:hidden"><img :src=con.bigphoto style="width:100%;"></span>
				<span style="font-weight:bold;font-size:20px;display:block;width:100%;margin:10px 0px;">{{con.title}}</span>
				<span style="display:block;width:100%;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#8b8b8b;font-size:15px;">{{con.container}}</span>
			</div>
		</div>
	</div>
	<div class="col-sm-3">
		<p style="height:30px;ine-height:30px;font-size:18px;">本周排行top5</p>
		<div>
			<div v-for="sort in sorts" style="margin:10px 0px">
				<span>{{sort.containre}}</span>
				<div style="margin-top:5px;">
					<span>喜欢：{{sort.link}}</span>
					<span>留言：{{sort.leavingmessage}}</span>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default({
	computed:{
		cons() {
			return this.$store.state.special
		},
		sorts() {
			return this.$store.state.specialSort
		}
	}
})
</script>