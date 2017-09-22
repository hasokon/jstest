window.onload = function(){
	cc.game.onStart = function(){
		//load resources
		cc.LoaderScene.preload(["HelloWorld.png"], function () {
			var MyScene = cc.Scene.extend({
				onEnter:function () {
					this._super();
					var size = cc.director.getWinSize();
					var center_x = size.width / 2;
					var center_y = size.height / 2;

					var sprite = cc.Sprite.create("HelloWorld.png");
					sprite.setPosition(center_x, center_y);
					sprite.setScale(0.8);
					this.addChild(sprite, 0);

					var label = cc.LabelTTF.create("Hello World!", "Arial", 40);
					label.setPosition(center_x, center_y);
					this.addChild(label, 1);
				}
			});
			cc.director.runScene(new MyScene());
		}, this);
	};
	cc.game.run("gameCanvas");
};
