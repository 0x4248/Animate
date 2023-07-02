function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
class animate {
    async opacity_to_100(id , dpf=10){
        var opacity = 0
        for (let i = 0; i < 26; i++) {
            // catch type error
            try {
                document.getElementById(id).style.opacity = opacity+"%"
            } catch (error) {
                console.error("The element with id: "+id+" does not exist in the DOM you need to add it to the DOM before using this function\nFull error:\n"+error)
                return "Error"
            }
            opacity = opacity + 4
            await sleep(dpf)
        } 
    }
    async opacity_to_0(id , dpf=10){
        var opacity = 100
        for (let i = 0; i < 26; i++) {
            try {
                document.getElementById(id).style.opacity = opacity+"%"
            } catch (error) {
                console.error("The element with id: "+id+" does not exist in the DOM you need to add it to the DOM before using this function\nFull error:\n"+error)
                return "Error"
            }
            opacity = opacity - 4
            await sleep(dpf)
        }
    }
    async blur_to_100(id , dpf=10){
        var blur = 0
        for (let i = 0; i < 26; i++) {
            try {
                document.getElementById(id).style.filter = "blur("+blur+"px)"
            } catch (error) {
                console.error("The element with id: "+id+" does not exist in the DOM you need to add it to the DOM before using this function\nFull error:\n"+error)
                return "Error"
            }
            blur = blur + 4
            await sleep(dpf)
        }
    }
    async blur_to_50(id , dpf=10){
        var blur = 0
        for (let i = 0; i < 26; i++) {
            try {
                document.getElementById(id).style.filter = "blur("+blur+"px)"
            } catch (error) {
                console.error("The element with id: "+id+" does not exist in the DOM you need to add it to the DOM before using this function\nFull error:\n"+error)
                return "Error"
            }
            blur = blur + 2
            await sleep(dpf)
        }
    }
    async blur_to_0(id , dpf=10){
        var blur = 100
        for (let i = 0; i < 26; i++) {
            try {
                document.getElementById(id).style.filter = "blur("+blur+"px)"
            } catch (error) {
                console.error("The element with id: "+id+" does not exist in the DOM you need to add it to the DOM before using this function\nFull error:\n"+error)
                return "Error"
            }
            blur = blur - 4
            await sleep(dpf)
        }
    }
    async opacity_blur_to_100_0(id , dpf=10){
        var opacity = 0
        var blur = 100
        for (let i = 0; i < 26; i++) {
            try {
                document.getElementById(id).style.opacity = opacity+"%"
                document.getElementById(id).style.filter = "blur("+blur+"px)"
            } catch (error) {
                console.error("The element with id: "+id+" does not exist in the DOM you need to add it to the DOM before using this function\nFull error:\n"+error)
                return "Error"
            }
            opacity = opacity + 4
            blur = blur - 4
            await sleep(dpf)
        }
    }
    async opacity_blur_to_0_100(id , dpf=10){
        var opacity = 100
        var blur = 0
        for (let i = 0; i < 26; i++) {
            try {
                document.getElementById(id).style.opacity = opacity+"%"
                document.getElementById(id).style.filter = "blur("+blur+"px)"
            } catch (error) {
                console.error("The element with id: "+id+" does not exist in the DOM you need to add it to the DOM before using this function\nFull error:\n"+error)
                return "Error"
            }
            opacity = opacity - 4
            blur = blur + 4
            await sleep(dpf)
        }
    }
}

async function test(){
    await sleep(1000)
    new animate().opacity_blur_to_0_100("img",20)
}
test()