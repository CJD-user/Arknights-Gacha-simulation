// gyst.js  
class GYST {  
    constructor() {  
        this.option = {  
            pic: 'data:image/png;base64',  
            mode: 'portrait',  
            bgcolor: '#333',  
            txtColor: '#FFFFFF',  
            prefix: 'page',  
            picZoom: 2,  
            zIndex: 9999999,  
            init: false,  
            landback: false,  
        };  
    }  

    landScape(option) {  
        if (option.mode && option.mode !== 'portrait') {  
            this.option.txt = '为了更好的体验，请使用横屏浏览';  
        } else {  
            this.option.txt = '为了更好的体验，请使用竖屏浏览';  
        }  

        Object.assign(this.option, option);  

        /* this.createCss(); */ 
        this.createDom();  

        const landNode = document.getElementById(this.option.prefix + '-landscape');  
        const optionMode = option.mode ? option.mode : this.option.mode;  
        const winW = document.documentElement.clientWidth || window.innerWidth;  
        const winH = document.documentElement.clientHeight || window.innerHeight;  
        const initOrientation = winW > winH ? 'landscape' : 'portrait';  
        const isOrientationReload = initOrientation === optionMode ? false : true;  

        if (initOrientation !== optionMode)  
            landNode.style.display = 'block';  
        else  
            landNode.style.display = 'none';  

        const updateOrientation = () => {  
            document.activeElement.blur();  
            const orientation = window.orientation;  
            const currentOrientation = (orientation === 90 || orientation === -90) ? 'landscape' : 'portrait';  
            landNode.style.display = currentOrientation !== optionMode ? 'block' : 'none';  
        };  

        window.addEventListener('DOMContentLoaded', () => {  
            window.addEventListener('orientationchange', () => {  
                if (isOrientationReload) {  
                    location.reload(true);  
                }  
                updateOrientation();  
            }, false);  
        }, false);  
    }  

    _stopScroll(event) {  
        event.preventDefault();  
    }  

    disableScroll() {  
        document.body.addEventListener('touchmove', this._stopScroll, { passive: false });  
    }  

    enableScroll() {  
        document.body.removeEventListener('touchmove', this._stopScroll);  
    }  

    dialogAction(option) {  
        const opt = {  
            rootEle: '#pageContainer',  
            wrapClass: '.mod-dialog-wrap',  
            openClass: '.j-openDialog',  
            closeClass: '.j-closeDialog',  
            ...option,  
        };  

  /*      document.querySelector(opt.rootEle).addEventListener('click', (event) => {  
            if (event.target.matches(opt.openClass)) {  
                const dialogId = event.target.getAttribute('data-dialogid');  
                const dg = document.getElementById(dialogId);  
                dg.style.display = 'block';  
                dg.classList.add('show');  
                if (dg.getAttribute('data-scroll') !== 'scroll') {  
                    this.disableScroll();  
                }  
            }  
            if (event.target.matches(opt.closeClass)) {  
                const dg = event.target.closest(opt.wrapClass);  
                dg.classList.remove('show');  
                if (dg.getAttribute('data-scroll') !== 'scroll') {  
                    this.enableScroll();  
                }  
            }  
        });  */
    }  

  /*  createCss() {  
        const cssBlock = `  
        .${this.option.prefix}-landscape {  
            width: 100%;  
            height: 100%;  
            background: ${this.option.bgcolor};  
            position: fixed;  
            left: 0; right: 0; top: 0; bottom: 0; z-index: ${this.option.zIndex};  
            display: none; text-align: center;  
        }  
        .${this.option.prefix}-landscape-box {  
            position: relative;  
            margin-left: auto; margin-right: auto; top: 50%;  
            transform: translateY(-50%);  
        }  
        .${this.option.prefix}-landscape span {  
            font-size: 16px; display: block; color: ${this.option.txtColor};  
            text-align: center; width: 100%; padding-top: 40px; line-height: 2;  
        }  
        .${this.option.prefix}-landscape img {  
            -webkit-animation: ${this.option.prefix}-landscapeAni 1.2s ease infinite alternate;  
            animation: ${this.option.prefix}-landscapeAni 1.2s ease infinite alternate;  
        }  
        @-webkit-keyframes ${this.option.prefix}-landscapeAni {  
            0% { transform: rotate(90deg); }  
            30% { transform: rotate(90deg); }  
            70% { transform: rotate(0deg); }  
            100% { transform: rotate(0deg); }  
        }  
        @keyframes ${this.option.prefix}-landscapeAni {  
            0% { transform: rotate(90deg); }  
            30% { transform: rotate(90deg); }  
            70% { transform: rotate(0deg); }  
            100% { transform: rotate(0deg); }  
        }`;  

        const style = document.createElement("style");  
        style.type = "text/css";  
        style.textContent = cssBlock;  
        document.head.appendChild(style);  
    }  */

    createDom() {  
        const landscapeDom = document.createElement("div");  
        landscapeDom.className = `${this.option.prefix}-landscape`;  
        landscapeDom.id = `${this.option.prefix}-landscape`;  
        landscapeDom.innerHTML = `<div class="${this.option.prefix}-landscape-box">  
            <img src="${this.option.pic}" id="${this.option.prefix}-landscape-pic" style="display:inline-block;" />  
            <span>${this.option.txt}</span>  
        </div>`;  

        document.body.appendChild(landscapeDom);  

        const img = new Image();  
        img.src = this.option.pic;  
        img.onload = () => {  
            const picElement = document.getElementById(`${this.option.prefix}-landscape-pic`);  
            picElement.width = parseInt(img.width / this.option.picZoom);  
            picElement.height = parseInt(img.height / this.option.picZoom);  
        };  
    }  
}  

// 默认导出 GYST 实例  
export default new GYST();