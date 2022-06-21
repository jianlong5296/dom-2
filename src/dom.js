window.dom = {
    find(selector,scope){
      return (scope || document).querySelectorAll(selector)    
    },
    style(div,color,red){
        div.style[color]=red
    },
    each(nodeList,fn){
        for (let i = 0;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        } 
    }
}
