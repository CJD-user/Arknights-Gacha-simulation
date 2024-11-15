// arknights.js  

class Arknights {  
    constructor() {  
        this.initialize();  
    }  

    initialize() {  
        this.screenRotateAlert();  
        window.addEventListener('load', () => {  
            this.screenAdapter();  
            this.bgParallaxInit();  
            this.hideLoader();  
        });  
        this.showTime();  
    }  

    hideLoader() {  
        const loaderLayer = document.getElementById('loader-layer');  
        if (loaderLayer) {  
            loaderLayer.style.display = 'none';  
        }  
    }  

    bgParallaxInit() {  
        const coverElement = document.getElementById('bg-img'); // 获取元素  
            const cover = {  
                t: coverElement,  
                w: coverElement.naturalWidth,  
                h: coverElement.naturalHeight  
            };   
        
            // 这里可以继续使用 cover 对象  
            console.log(cover); // 输出 cover 对象以验证  
        this.updateMarkHeight();  

        const updateBackground = () => {  
            const mark = document.getElementById('mark');  
            const _w = mark.offsetWidth;  
            const _h = mark.offsetHeight;  

            const e = (_w >= 1000 || _h >= 1000) ? 1000 : 500;  
            let x, y, i;  

            if (_w >= _h) {  
                i = _w / e * 50;  
                y = i;  
                x = i * _w / _h;  
            } else {  
                i = _h / e * 50;  
                x = i;  
                y = i * _h / _w;  
            }  

            document.getElementById('bg-layer').style.cssText = `  
                width: ${_w + x}px;  
                height: ${_h + y}px;  
                margin-left: ${-0.5 * x}px;  
                margin-top: ${-0.5 * y}px;  
            `;  

            cover.t.style.width = `${_w + x}px`;  
            cover.t.style.height = `${_h + y}px`;  

            if (!cover.w) {  
                cover.w = cover.t.clientWidth;  
                cover.h = cover.t.clientHeight;  
            }  

            const id = cover.t;  
            const w = cover.w;  
            const h = cover.h;  
            const _height = id.parentNode.clientHeight;  
            const _width = id.parentNode.clientWidth;  
            const ratio = h / w;  

            if (_height / _width > ratio) {  
                id.style.height = `${_height}px`;  
                id.style.width = `${_height / ratio}px`;  
            } else {  
                id.style.width = `${_width}px`;  
                id.style.height = `${_width * ratio}px`;  
            }  

            id.style.left = `${(_width - parseInt(id.style.width)) / 2}px`;  
            id.style.top = `${(_height - parseInt(id.style.height)) / 2}px`;  
        };  

        updateBackground();  
        const scene = document.getElementById('mark');  
        const parallaxInstance = new Parallax(scene);  
    }  

    updateMarkHeight() {  
        const mark = document.getElementById('mark');  
        if (mark) {  
            mark.style.height = `${window.innerHeight}px`;  
        }  
    }  

    screenAdapter() {  
        const sw = Math.max(window.innerHeight, window.innerWidth);  
        const sh = Math.min(window.innerHeight, window.innerWidth);  
        const tsw = 1366, tsh = 653, r = 7 / 4;  
        let _w = sw / tsw;  
        let _h = sh / tsh;  

        if (sw / sh < r) {  
            document.querySelectorAll('.char.perspective.box').forEach(box => {  
                box.style.width = `${window.innerWidth * 0.6}px`;  
                box.style.transform = `translateY(calc((80vh - 460px * ${_w}) * 0.5))`;  
            });  
            document.querySelectorAll('#level-box-adapter, #left-mune-adapter, #right-mune-adapter, #right-mune-popup-adapter').forEach(adapter => {  
                adapter.style.transform = `scale(${_w})`;  
            }); 
		
            document.querySelector('.right.menu.box').style.marginRight = `${-80 * _w}px`;  
            document.querySelector('.left.menu.box').style.transform = `perspective(30em) rotateY(10deg) scale(0.9) translateY(calc((-80vh + 460px * ${_w}) * 0.5))`;  
            document.querySelector('.right.menu.box').style.transform = `perspective(30em) rotateY(-10deg) scale(0.9) translateY(calc((-80vh + 460px * ${_w}) * 0.5))`;  
        } else {  
            document.querySelectorAll('.char.perspective.box').forEach(box => {  
                box.style.width = `${window.innerHeight / 0.8}px`;  
            });  
            document.querySelectorAll('#level-box-adapter, #left-mune-adapter, #right-mune-adapter, #right-mune-popup-adapter').forEach(adapter => {  
                adapter.style.transform = `scale(${_h})`;  
            });  
            document.querySelector('.right.menu.box').style.marginRight = `${-80 * _h}px`;  
        }  
    }  

    screenRotateAlert() {  
        if (typeof GYST !== 'undefined') {  
            GYST.landScape({ mode: 'landscape' });  
        }  
    }  

    showTime() {  
        setInterval(() => {  
            const now = new Date();  
            const year = now.getFullYear();  
            const month = this.checkTime(now.getMonth() + 1);  
            const day = this.checkTime(now.getDate());  
            const hour = this.checkTime(now.getHours());  
            const minute = this.checkTime(now.getMinutes());  
            const str = `${year}/${month}/${day} ${hour}:${minute}`;  
			if(str){
           document.getElementById('time').textContent = str; 
			}else{
				console.log("str为空")
			}
        }, 500);  
    }  

    checkTime(i) {  
        return (i < 10) ? "0" + i : i;  
    }  
}  

// 默认导出 Arknights 实例  
export default new Arknights();