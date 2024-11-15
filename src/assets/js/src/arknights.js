export default {
		data() {
			return {
				width: 300,
				height: 300,
				dustQuantity: 50,
				dustArr: [],
				ctx: null,
				animationInterval: null,
			};
		},
		mounted() {
			const canvas =  document.getElementById('canvas-dust');
			this.ctx = canvas.getContext('2d');
			this.resize();
			this.build();
			window.addEventListener('resize', this.resize);
			
			this.initialize();  
			window.addEventListener('resize', this.updateDimensions);

		},
		beforeDestroy() {
			clearInterval(this.animationInterval);
			window.removeEventListener('resize', this.resize);
			
			window.removeEventListener('resize', this.updateDimensions); 
		},
		
		methods: {
			build() {
				this.resize();
				if (this.ctx) {
					const points = this.getPoint(this.dustQuantity);
					for (const point of points) {
						const dustObj = new Dust();
						this.buildDust(point[0], point[1], dustObj);
						this.dustArr.push(dustObj);
					}
					this.animationInterval = setInterval(this.play, 80);
				}
			},
			play() {
				if (this.ctx) {
					this.ctx.clearRect(0, 0, this.width, this.height);
				}
				for (const dust of this.dustArr) {
					if (dust.x < 0 || dust.y < 0) {
						dust.x = this.width;
						dust.y = Math.floor(Math.random() * window.innerHeight);
						this.buildDust(dust.x, dust.y, dust);
					} else {
						dust.x -= dust.vx;
						dust.y -= dust.vy;
						this.buildDust(dust.x, dust.y, dust);
					}
				}
			},
			buildDust(x, y, dust) {
				if (x) dust.x = x;
				if (y) dust.y = y;
				if (this.ctx) {
					this.ctx.beginPath();
					this.ctx.shadowBlur = dust.shadowBlur;
					this.ctx.shadowColor = dust.color;
					this.ctx.shadowOffsetX = dust.shadowX;
					this.ctx.shadowOffsetY = dust.shadowY;
					this.ctx.ellipse(dust.x, dust.y, dust.radiusX, dust.radiusY, dust.rotation, 0, Math.PI * 2);
					this.ctx.closePath();
					this.ctx.fillStyle = dust.color;
					this.ctx.fill();
				}
			},
			resize() {
				const canvas = document.getElementById('canvas-dust');
				this.width = window.innerWidth;
				this.height = window.innerHeight;
				this.dustQuantity = Math.floor((this.width + this.height) / 30);
				if (canvas) {
					canvas.width = this.width;
					canvas.height = this.height;
				}
			},
			getPoint(number = 1) {
				const point = [];
				for (let i = 0; i < number; i++) {
					const x = Math.floor(Math.random() * window.innerWidth);
					const y = Math.floor(Math.random() * window.innerHeight);
					point.push([x, y]);
				}
				return point;
			},
			goToOpSearch() {
				this.$router.push('/OperatorSearch'); // 使用 router.push 方法跳转
				  
			},
			
			initialize() {  
			      this.screenRotateAlert();  
			      this.screenAdapter();  
			      this.bgParallaxInit();  
			      this.hideLoader();  
			      this.showTime();  
			    },  
			
			    hideLoader() {  
			      const loaderLayer = document.getElementById('loader-layer');  
			      if (loaderLayer) {  
			        loaderLayer.style.display = 'none';  
			      }  
			    },  
			
			    bgParallaxInit() {  
			      const coverElement = document.getElementById('bg-img');  
			      const cover = {  
			        t: coverElement,  
			        w: coverElement.naturalWidth,  
			        h: coverElement.naturalHeight,  
			      };  
			
			      //console.log(cover); // 输出 cover 对象以验证  
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
			    },  
			
			    updateMarkHeight() {  
			      const mark = document.getElementById('mark');  
			      if (mark) {  
			        mark.style.height = `${window.innerHeight}px`;  
			      }  
			    },  
			
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
			    },  
			
			    screenRotateAlert() {  
			      if (typeof GYST !== 'undefined') {  
			        GYST.landScape({ mode: 'landscape' });  
			      }  
			    },  
			
			    showTime() {  
			      setInterval(() => {  
			        const now = new Date();  
			        const year = now.getFullYear();  
			        const month = this.checkTime(now.getMonth() + 1);  
			        const day = this.checkTime(now.getDate());  
			        const hour = this.checkTime(now.getHours());  
			        const minute = this.checkTime(now.getMinutes());  
			        const str = `${year}/${month}/${day} ${hour}:${minute}`;  
			        
			        if (str) {  
			          document.getElementById('time').textContent = str;  
			        } else {  
			          console.log("str为空")  
			        }  
			      }, 500);  
			    },  
			
			    checkTime(i) {  
			      return (i < 10) ? "0" + i : i;  
			    },  
			
			    updateDimensions() {  
			      this.updateMarkHeight(); // 更新 `mark` 的高度  
			      this.screenAdapter(); // 调整屏幕适配
				  },
			
		},
	};

	// Dust class definition  
	class Dust {
		constructor() {
			this.x = 50;
			this.y = 50;
			this.vx = Math.random() * 5 + 5;
			this.vy = Math.random() * 5;
			this.color = '#fff';
			this.shadowBlur = Math.random() * 3;
			this.shadowX = (Math.random() * 2) - 1;
			this.shadowY = (Math.random() * 2) - 1;
			this.radiusX = Math.random() * 3;
			this.radiusY = Math.random() * 3;
			this.rotation = Math.PI * Math.floor(Math.random() * 2);
		}
	}