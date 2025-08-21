const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Text,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.DragnDrop.Cnds.OnDragStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Cnds.OnLayoutStart
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{organik: 0},
	{TSNonOrganik: 0},
	{TSOrganik: 0},
	{Pos_1: 0},
	{Pos_2: 0},
	{Pos_3: 0},
	{Pos_4: 0},
	{DragDrop: 0},
	{SNonOrganik: 0},
	{SOrganik: 0},
	{TWin: 0},
	{lastPostX: 0},
	{lastPostY: 0},
	{CountSampah: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TSNonOrganik: class extends self.ISpriteInstance {},
	TSOrganik: class extends self.ISpriteInstance {},
	Pos_1: class extends self.ISpriteInstance {},
	Pos_2: class extends self.ISpriteInstance {},
	Pos_3: class extends self.ISpriteInstance {},
	Pos_4: class extends self.ISpriteInstance {},
	SNonOrganik: class extends self.ISpriteInstance {},
	SOrganik: class extends self.ISpriteInstance {},
	TWin: class extends self.ITextInstance {}
}