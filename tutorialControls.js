function TutorialControls(controls, animator, projectionCenter, canvas)
{
	this.controls = controls;
	this.animator = animator;
	this.canvas = canvas;
	this.projectionCenter = projectionCenter;
	
	this.animationTime = 3;
}

TutorialControls.prototype.moveCameraToProjectionCenter = function()
{
	var projectionCenterWorld = this.projectionCenter.sphere.getWorldPosition();
	if (projectionCenterWorld.equals(new THREE.Vector3(0, 0, 0)))
	{
		// We need to make sure that the camera is never set to 0,0,0 or track balls will freeze.
		this.canvas.camera.position.copy(new THREE.Vector3(0.01, 0, 0));
		this.canvas.trackballControls.target = new THREE.Vector3(0, 0.1, 0);
	}
	else
	{
		this.canvas.camera.position.copy(this.projectionCenter.sphere.getWorldPosition());
		this.canvas.trackballControls.target = new THREE.Vector3(0, 0.1, 0);
	}
}

TutorialControls.prototype.constructCylinder = function()
{	
	var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 4};
	var axisBoxInstruction = {slider: this.controls.axisBox, target: 4};
	
	this.animator.startAnimations([upperRadiusBoxInstruction, axisBoxInstruction], this.animationTime);
}

TutorialControls.prototype.constructCone = function()
{
	var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 0.01};
	var axisBoxInstruction = {slider: this.controls.axisBox, target: 4};
	
	this.animator.startAnimations([upperRadiusBoxInstruction, axisBoxInstruction], this.animationTime);
}

TutorialControls.prototype.constructFrustum = function()
{
	var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target:2};
	var axisBoxInstruction = {slider: this.controls.axisBox, target: 4};
	
	this.animator.startAnimations([upperRadiusBoxInstruction, axisBoxInstruction], this.animationTime);
}


TutorialControls.prototype.setProjection = function(name)
{
	if (name == "gnomonic azimuthal")
	{
		var latBoxInstruction = {slider: this.controls.latBox, target:90};
		var lonBoxInstruction = {slider: this.controls.lonBox, target: 0};
		var rotBoxInstruction = {slider: this.controls.rotBox, target:0};
		
		var axisBoxInstruction = {slider: this.controls.axisBox, target:0};
		var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 0.01};
		var lowerRadiusBoxInstruction = {slider: this.controls.lowerRadiusBox, target: 4};
		
		var geometryOffsetBoxInstruction = {slider: this.controls.geometryOffsetBox, target:1};
		var lightSourceOffsetBoxInstruction = {slider: this.controls.lightSourceOffsetBox, target: 0};
		var lightSourceLatitudeBoxInstruction = {slider: this.controls.lightSourceLatitudeBox, target: 0};
		var lightSourceLongitudeBoxInstruction = {slider: this.controls.lightSourceLongitudeBox, target: 0};
			
		this.animator.startAnimations([latBoxInstruction, lonBoxInstruction, rotBoxInstruction, axisBoxInstruction, upperRadiusBoxInstruction, lowerRadiusBoxInstruction, geometryOffsetBoxInstruction, lightSourceOffsetBoxInstruction, lightSourceLatitudeBoxInstruction, lightSourceLongitudeBoxInstruction], this.animationTime);
		
	}
	else if (name == "orthographic azimuthal")
	{		
		var latBoxInstruction = {slider: this.controls.latBox, target:90};
		var lonBoxInstruction = {slider: this.controls.lonBox, target: 0};
		var rotBoxInstruction = {slider: this.controls.rotBox, target:0};
		
		var axisBoxInstruction = {slider: this.controls.axisBox, target:0};
		var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 0.01};
		var lowerRadiusBoxInstruction = {slider: this.controls.lowerRadiusBox, target: 4};
		
		var geometryOffsetBoxInstruction = {slider: this.controls.geometryOffsetBox, target:1};
		var lightSourceOffsetBoxInstruction = {slider: this.controls.lightSourceOffsetBox, target: -100};
		var lightSourceLatitudeBoxInstruction = {slider: this.controls.lightSourceLatitudeBox, target: 0};
		var lightSourceLongitudeBoxInstruction = {slider: this.controls.lightSourceLongitudeBox, target: 0};
			
		this.animator.startAnimations([latBoxInstruction, lonBoxInstruction, rotBoxInstruction, axisBoxInstruction, upperRadiusBoxInstruction, lowerRadiusBoxInstruction, geometryOffsetBoxInstruction, lightSourceOffsetBoxInstruction, lightSourceLatitudeBoxInstruction, lightSourceLongitudeBoxInstruction], this.animationTime);
	}
	else if (name == "stereographic azimuthal")
	{
		var latBoxInstruction = {slider: this.controls.latBox, target:90};
		var lonBoxInstruction = {slider: this.controls.lonBox, target: 0};
		var rotBoxInstruction = {slider: this.controls.rotBox, target:0};
		
		var axisBoxInstruction = {slider: this.controls.axisBox, target:0};
		var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 0.01};
		var lowerRadiusBoxInstruction = {slider: this.controls.lowerRadiusBox, target: 4};
		
		var geometryOffsetBoxInstruction = {slider: this.controls.geometryOffsetBox, target:1};
		var lightSourceOffsetBoxInstruction = {slider: this.controls.lightSourceOffsetBox, target: -1};
		var lightSourceLatitudeBoxInstruction = {slider: this.controls.lightSourceLatitudeBox, target: 0};
		var lightSourceLongitudeBoxInstruction = {slider: this.controls.lightSourceLongitudeBox, target: 0};
			
		this.animator.startAnimations([latBoxInstruction, lonBoxInstruction, rotBoxInstruction, axisBoxInstruction, upperRadiusBoxInstruction, lowerRadiusBoxInstruction, geometryOffsetBoxInstruction, lightSourceOffsetBoxInstruction, lightSourceLatitudeBoxInstruction, lightSourceLongitudeBoxInstruction], this.animationTime);
	}
	else if (name == "vertical perspective azimuthal near side")
	{		
		var latBoxInstruction = {slider: this.controls.latBox, target:90};
		var lonBoxInstruction = {slider: this.controls.lonBox, target: 0};
		var rotBoxInstruction = {slider: this.controls.rotBox, target:0};
		
		var axisBoxInstruction = {slider: this.controls.axisBox, target:0};
		var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 0.01};
		var lowerRadiusBoxInstruction = {slider: this.controls.lowerRadiusBox, target: 4};
		
		var geometryOffsetBoxInstruction = {slider: this.controls.geometryOffsetBox, target:1};
		var lightSourceOffsetBoxInstruction = {slider: this.controls.lightSourceOffsetBox, target: 2};
		var lightSourceLatitudeBoxInstruction = {slider: this.controls.lightSourceLatitudeBox, target: 0};
		var lightSourceLongitudeBoxInstruction = {slider: this.controls.lightSourceLongitudeBox, target: 0};
			
		this.animator.startAnimations([latBoxInstruction, lonBoxInstruction, rotBoxInstruction, axisBoxInstruction, upperRadiusBoxInstruction, lowerRadiusBoxInstruction, geometryOffsetBoxInstruction, lightSourceOffsetBoxInstruction, lightSourceLatitudeBoxInstruction, lightSourceLongitudeBoxInstruction], this.animationTime);
	}
	else if (name == "vertical perspective azimuthal far side")
	{
		var latBoxInstruction = {slider: this.controls.latBox, target:90};
		var lonBoxInstruction = {slider: this.controls.lonBox, target: 0};
		var rotBoxInstruction = {slider: this.controls.rotBox, target:0};
		
		var axisBoxInstruction = {slider: this.controls.axisBox, target:0};
		var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 0.01};
		var lowerRadiusBoxInstruction = {slider: this.controls.lowerRadiusBox, target: 4};
		
		var geometryOffsetBoxInstruction = {slider: this.controls.geometryOffsetBox, target:1};
		var lightSourceOffsetBoxInstruction = {slider: this.controls.lightSourceOffsetBox, target: -2};
		var lightSourceLatitudeBoxInstruction = {slider: this.controls.lightSourceLatitudeBox, target: 0};
		var lightSourceLongitudeBoxInstruction = {slider: this.controls.lightSourceLongitudeBox, target: 0};
			
		this.animator.startAnimations([latBoxInstruction, lonBoxInstruction, rotBoxInstruction, axisBoxInstruction, upperRadiusBoxInstruction, lowerRadiusBoxInstruction, geometryOffsetBoxInstruction, lightSourceOffsetBoxInstruction, lightSourceLatitudeBoxInstruction, lightSourceLongitudeBoxInstruction], this.animationTime);
	}
	else if (name == "oblique perspective non-azimuthal")
	{
		var latBoxInstruction = {slider: this.controls.latBox, target:66};
		var lonBoxInstruction = {slider: this.controls.lonBox, target: 0};
		var rotBoxInstruction = {slider: this.controls.rotBox, target:0};
		
		var axisBoxInstruction = {slider: this.controls.axisBox, target:0};
		var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 0.01};
		var lowerRadiusBoxInstruction = {slider: this.controls.lowerRadiusBox, target: 4};
		
		var geometryOffsetBoxInstruction = {slider: this.controls.geometryOffsetBox, target:1};
		var lightSourceOffsetBoxInstruction = {slider: this.controls.lightSourceOffsetBox, target: 2};
		var lightSourceLatitudeBoxInstruction = {slider: this.controls.lightSourceLatitudeBox, target: 24};
		var lightSourceLongitudeBoxInstruction = {slider: this.controls.lightSourceLongitudeBox, target: 0};
			
		this.animator.startAnimations([latBoxInstruction, lonBoxInstruction, rotBoxInstruction, axisBoxInstruction, upperRadiusBoxInstruction, lowerRadiusBoxInstruction, geometryOffsetBoxInstruction, lightSourceOffsetBoxInstruction, lightSourceLatitudeBoxInstruction, lightSourceLongitudeBoxInstruction], this.animationTime);
	}
	else if (name == "central cylindrical")
	{		
		var latBoxInstruction = {slider: this.controls.latBox, target:90};
		var lonBoxInstruction = {slider: this.controls.lonBox, target: 0};
		var rotBoxInstruction = {slider: this.controls.rotBox, target:0};
		
		var axisBoxInstruction = {slider: this.controls.axisBox, target:4};
		var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 1};
		var lowerRadiusBoxInstruction = {slider: this.controls.lowerRadiusBox, target: 1};
		
		var geometryOffsetBoxInstruction = {slider: this.controls.geometryOffsetBox, target:0};
		var lightSourceOffsetBoxInstruction = {slider: this.controls.lightSourceOffsetBox, target: 0};
		var lightSourceLatitudeBoxInstruction = {slider: this.controls.lightSourceLatitudeBox, target: 0};
		var lightSourceLongitudeBoxInstruction = {slider: this.controls.lightSourceLongitudeBox, target: 0};
			
		this.animator.startAnimations([latBoxInstruction, lonBoxInstruction, rotBoxInstruction, axisBoxInstruction, upperRadiusBoxInstruction, lowerRadiusBoxInstruction, geometryOffsetBoxInstruction, lightSourceOffsetBoxInstruction, lightSourceLatitudeBoxInstruction, lightSourceLongitudeBoxInstruction], this.animationTime);
		
	}
	else if (name == "centrographic conic")
	{		
		var latBoxInstruction = {slider: this.controls.latBox, target:90};
		var lonBoxInstruction = {slider: this.controls.lonBox, target: 0};
		var rotBoxInstruction = {slider: this.controls.rotBox, target:0};
		
		var axisBoxInstruction = {slider: this.controls.axisBox, target:4};
		var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 0.01};
		var lowerRadiusBoxInstruction = {slider: this.controls.lowerRadiusBox, target: 2.4};
		
		var geometryOffsetBoxInstruction = {slider: this.controls.geometryOffsetBox, target:0};
		var lightSourceOffsetBoxInstruction = {slider: this.controls.lightSourceOffsetBox, target: 0};
		var lightSourceLatitudeBoxInstruction = {slider: this.controls.lightSourceLatitudeBox, target: 0};
		var lightSourceLongitudeBoxInstruction = {slider: this.controls.lightSourceLongitudeBox, target: 0};
			
		this.animator.startAnimations([latBoxInstruction, lonBoxInstruction, rotBoxInstruction, axisBoxInstruction, upperRadiusBoxInstruction, lowerRadiusBoxInstruction, geometryOffsetBoxInstruction, lightSourceOffsetBoxInstruction, lightSourceLatitudeBoxInstruction, lightSourceLongitudeBoxInstruction], this.animationTime);
		
	}
	else if (name == "brauns stereographic conic")
	{
		var latBoxInstruction = {slider: this.controls.latBox, target:90};
		var lonBoxInstruction = {slider: this.controls.lonBox, target: 0};
		var rotBoxInstruction = {slider: this.controls.rotBox, target:0};
		
		var axisBoxInstruction = {slider: this.controls.axisBox, target:4};
		var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 0.01};
		var lowerRadiusBoxInstruction = {slider: this.controls.lowerRadiusBox, target: 1.46};
		
		var geometryOffsetBoxInstruction = {slider: this.controls.geometryOffsetBox, target:1.04};
		var lightSourceOffsetBoxInstruction = {slider: this.controls.lightSourceOffsetBox, target: -1};
		var lightSourceLatitudeBoxInstruction = {slider: this.controls.lightSourceLatitudeBox, target: 0};
		var lightSourceLongitudeBoxInstruction = {slider: this.controls.lightSourceLongitudeBox, target: 0};
			
		this.animator.startAnimations([latBoxInstruction, lonBoxInstruction, rotBoxInstruction, axisBoxInstruction, upperRadiusBoxInstruction, lowerRadiusBoxInstruction, geometryOffsetBoxInstruction, lightSourceOffsetBoxInstruction, lightSourceLatitudeBoxInstruction, lightSourceLongitudeBoxInstruction], this.animationTime);
	}
}

TutorialControls.prototype.resetControls = function()
{
	this.controls.bordersCheckbox.checked = true;
	this.controls.bordersCheckbox.onclick();
	this.controls.graticuleCheckbox.checked = true;
	this.controls.graticuleCheckbox.onclick();
	this.controls.tissotCheckbox.checked = false;
	this.controls.tissotCheckbox.onclick();
	
	var latBoxInstruction = {slider: this.controls.latBox, target:90};
	var lonBoxInstruction = {slider: this.controls.lonBox, target: 0};
	var rotBoxInstruction = {slider: this.controls.rotBox, target:0};
	
	var axisBoxInstruction = {slider: this.controls.axisBox, target:0};
	var upperRadiusBoxInstruction = {slider: this.controls.upperRadiusBox, target: 0.01};
	var lowerRadiusBoxInstruction = {slider: this.controls.lowerRadiusBox, target: 4};
	
	var geometryOffsetBoxInstruction = {slider: this.controls.geometryOffsetBox, target:1};
	var lightSourceOffsetBoxInstruction = {slider: this.controls.lightSourceOffsetBox, target: 0};
	var lightSourceLatitudeBoxInstruction = {slider: this.controls.lightSourceLatitudeBox, target: 0};
	var lightSourceLongitudeBoxInstruction = {slider: this.controls.lightSourceLongitudeBox, target: 0};
		
	this.animator.startAnimations([latBoxInstruction, lonBoxInstruction, rotBoxInstruction, axisBoxInstruction, upperRadiusBoxInstruction, lowerRadiusBoxInstruction, geometryOffsetBoxInstruction, lightSourceOffsetBoxInstruction, lightSourceLatitudeBoxInstruction, lightSourceLongitudeBoxInstruction], 1);
}

/*
Controls.prototype.reset = function()
{
	document.getElementById("surface_orientation").reset();
	document.getElementById("surface_geometry").reset();
	document.getElementById("lightsource").reset();
	document.getElementById("textures").reset();
}
*/