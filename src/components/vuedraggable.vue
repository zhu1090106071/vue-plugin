<template>
    <div>
        <div>
            <p>安装：npm install vuedraggable</p>
            <p>引用：在组件中写入 <span>import draggable from 'vuedraggable'</span></p>
        </div>
        <draggable v-model="tags" :move="getdata" @update="datadragEnd">
            <transition-group class="box">
                <div v-for="element in tags" :key="element.id" :zid="element.id">
                    {{element.name}}
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script type="text/javascript">
    import draggable from 'vuedraggable'
    export default {
        data() {
            return {
                val: '123',
                tags:[
                    {
                        name : '张三',
                        id : 1
                    },{
                        name : '123',
                        id : 2
                    },{
                        name : 'color',
                        id : 3
                    }
                ]
            }
        },
        components : {
            draggable
        },
        directives : {
            drag : {
                bind : function (el, binding) {
                    console.log(binding)
                    let oDiv = el;   //当前元素
                    let self = this;  //上下文
                    oDiv.onmousedown = function (e) {
                    //鼠标按下，计算当前元素距离可视区的距离
                        let disX = e.clientX - oDiv.offsetLeft;
                        let disY = e.clientY - oDiv.offsetTop;
                        document.onmousemove = function (e) {
                          //通过事件委托，计算移动的距离 
                            let l = e.clientX - disX;
                            let t = e.clientY - disY;
                            let x = l + 100;
                            let y = x + 50;
                          //移动当前元素  
                            oDiv.style.left = l + 'px';
                            oDiv.style.top = t + 'px';
                             //将此时的位置传出去
                            binding.value({x:e.pageX,y:e.pageY,a:x,b:y})
                        };
                        document.onmouseup = function (e) {                    
                            document.onmousemove = null;
                            document.onmouseup = null;
                        };
                    }
                }
            }
        },
        methods: {
            getdata (evt) {
                console.log(evt)
                console.log(evt.draggedContext.element.id)
            },
            datadragEnd (evt) {
                console.log('拖动前的索引 :' + evt.oldIndex)
                console.log('拖动后的索引 :' + evt.newIndex)
                console.log(this.tags)
            }
        }
    }
</script>

<style type="text/css">
    .box{
        width: 250px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .box>div{
        width: 100px;
        height: 100px;
        line-height: 100px;
        border: 1px solid black;
        margin: 10px;
    }
    div[zid='1']{
        background: skyblue;
    }
    div[zid='2']{
        background: pink;
    }
    div[zid='3']{
        background: yellow;
    }
</style>
