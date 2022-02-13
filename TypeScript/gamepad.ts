class gamepadUtil {

    private static gamepad: gamepadUtil;
    private static callback: Function;
    // 手柄是否链接中
    private static isConnected = false;
    // 手柄控制gamepad
    private static controller: any = null;
    // 存储状态
    private static buttonsCache: Array<any> = [];
    // 当前按钮状态
    private static buttonsStatus: Array<any> = [];
    // 坐标轴状态
    private static axesCache: Array<any> = [];
    // 坐标轴状态
    private static axesStatus: Array<any> = [];

    private constructor(callback: Function) {
        gamepadUtil.callback = callback;
    }

    // // XBox360 layout
    private static buttons = [
        'A', 'B', 'X', 'Y',
        'LB', 'RB', 'LT', 'RT',
        'Select', 'Start', 'LS', 'RS',
        'DPad-Up',
        'DPad-Down', 'DPad-Left', 'DPad-Right', 'UN',
    ]

    // 初始化，开启监听手柄链接事件
    public static init(callback: Function) {
        window.addEventListener("gamepadconnected", this._connect);
        window.addEventListener('gamepaddisconnected', this._disconnect);
        if (!this.gamepad) {
            this.gamepad = new gamepadUtil(callback);
        }
    }

    // 手柄链接
    static _connect(evt: any) {
        gamepadUtil.isConnected = true;
        gamepadUtil.controller = evt.gamepad;
        console.log('手柄链接成功');
        gamepadUtil.loopUpdateStatus();
    }

    // 手柄断开
    static _disconnect() {
        gamepadUtil.isConnected = false;
        gamepadUtil.controller = null;
        console.log('失去手柄链接');
    }

    // 更新手柄状态
    static _update() {
        this.axesCache = []; // 置空坐标轴缓存状态
        this.buttonsCache = []; // 每次置空缓存按钮的状态，从新状态中载入
        this.buttonsCache = [...this.buttonsStatus];
        this.axesCache = [...this.axesStatus];
        this.buttonsStatus = []; // 置空当前状态
        this.axesStatus = []; // 置空当前状态

        let c = this.controller; // 接收控制器最新状态

        // 按键
        let pressed = [];
        if (c.buttons) {
            for (let i = 0, t = c.buttons.length; i < t; i++) {
                if (c.buttons[i].pressed) {
                    pressed.push(this.buttons[i]);
                }
            }
        }

        // 坐标轴
        let axes = [];
        if (c.axes) {
            for (let a = 0, x = c.axes.length; a < x; a++) {
                axes.push(c.axes[a]);
            }
        }

        this.axesStatus = axes;
        this.buttonsStatus = pressed;
    }

    static _getNewgamepad() {
        this.controller = navigator.getGamepads()[0];
    }

    /* 
    利用 requestAnimationFrame 进行更新状态。
    requestAnimationFrame 告诉浏览器希望执行一个动画
        并要求浏览器在下次重绘之前调用指定的回调函数更新动画
        若想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame
        回调函数执行次数通常是每秒60次
*/
    // 循环更新状态并通过回调函数向外通知
    static loopUpdateStatus() {
        let isLop: any;
        if (!gamepadUtil.isConnected) { // 手柄已断开链接，或未连接
            // 通过回调函数通知状态
            gamepadUtil.callback({
                buttonsStatus: [],
                isNewStatusBtn: false,
                axesStatus: [],
                isNewStatusAxes: false,
                isConnected: false
            });
            window.cancelAnimationFrame(isLop);
            return;
        }
        gamepadUtil._update();
        // gamepadUtil.callback();
        gamepadUtil._getNewgamepad();
        // console.log(gamepadUtil.axesStatus);
        // if (gamepadUtil.buttonsStatus.length > 0) {
        //     console.log(gamepadUtil.buttonsStatus);
        // }

        // 是否有新状态
        let isNewStatusBtn = false;
        // 比较按键缓状态存与按键状态，若有差异则为新新按下，若无差异则为按住
        let buttonsStatus = gamepadUtil.buttonsStatus;
        let buttonsCache = gamepadUtil.buttonsCache;
        if (buttonsStatus.length !== buttonsCache.length) { // 若两数组长度不一致则有新按键按下
            isNewStatusBtn = true;
        } else {
            for (let i = 0, len = buttonsStatus.length; i < len; i++) {
                if (buttonsStatus[i] !== buttonsCache[i]) {
                    isNewStatusBtn = true;
                    break;
                }
            }
        }
        // 判断摇杆数据
        let isNewStatusAxes = false;
        let axesStatus = gamepadUtil.axesStatus;
        let axesCache = gamepadUtil.axesCache;
        if (axesCache.length !== 0) {
            for (let i = 0, len = axesStatus.length; i < len; i++) {
                if (axesStatus[i] !== axesCache[i]) {
                    isNewStatusAxes = true;
                    break;
                }
            }
        }

        // 通过回调函数通知状态
        if (isNewStatusBtn || isNewStatusAxes) {
            gamepadUtil.callback({ buttonsStatus, isNewStatusBtn, axesStatus, isNewStatusAxes, isConnected: gamepadUtil.isConnected });
        }

        isLop = window.requestAnimationFrame(gamepadUtil.loopUpdateStatus);
    }

}

export default gamepadUtil;