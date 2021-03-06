function LineProjector(glcanvas, surface, earth, projectionCenter) {
	this.scene = glcanvas.scene;
	this.glcanvas = glcanvas;
	this.surface = surface;
	this.earth = earth;
	this.projectionCenter = projectionCenter;
		
	glcanvas.glContainer.addEventListener( 'mousedown', this.setManualProjectionLine.bind(this), true );
	
	this.manualLine = new ProjectionLine(new THREE.Vector3(1,0,0) , this.projectionCenter, this.surface, this.scene, this.earth, 0xff0000);
	this.manualLine.disable();
	
	this.constructionLines = [];
	
    // TODO: Enable when fixed
	//this.constructLines(15, 180);
	//this.enableConstructionLines();
}


LineProjector.prototype.setManualProjectionLine = function(event)
{
	event.preventDefault();
	
	if (!event.shiftKey) 
		return
	
	var x = event.clientX - this.glcanvas.glContainer.offsetLeft;
	var y = event.clientY - this.glcanvas.glContainer.offsetTop;
	
	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2();
	
	mouse.x =   ( x / this.glcanvas.renderer.domElement.clientWidth  ) * 2 - 1;
	mouse.y = - ( y / this.glcanvas.renderer.domElement.clientHeight ) * 2 + 1;
	
	raycaster.setFromCamera( mouse, this.glcanvas.camera );
	
	var projectionWorldPosition = this.projectionCenter.sphere.getWorldPosition();
	
	var intersectsSurface = raycaster.intersectObject( this.earth.earthMesh );
	if ( intersectsSurface.length > 0 ) {
		
		var earthIntersection = intersectsSurface[0].point.clone();

		this.manualLine.disable();
		
		this.manualLine = new ProjectionLine(earthIntersection, this.projectionCenter, this.surface, this.scene, this.earth, 0xff0000);
		this.manualLine.enable();
	}
}

// TODO: Improve
LineProjector.prototype.constructLines = function(offsetLat, offsetLon)
{
	for (var lat = -90; lat <= 90; lat += offsetLat)
	{
		for (var lon = -180; lon <= 180; lon += offsetLon)
		{
		   var latRadian = (((lat) / 180) * 2 * Math.PI);
		   var lonRadian = (((lon) / 360) * 2 * Math.PI);
			
		   var x = Math.cos(latRadian) * Math.cos(lonRadian);
		   var y = Math.cos(latRadian) * Math.sin(lonRadian);
		   var z = Math.sin(latRadian);
		   
		   var target = new THREE.Vector3(x, y, z);
		   
		   var pl = new ProjectionLine(target, this.projectionCenter, this.surface, this.scene, this.earth, 0x00ff00);
			
		   this.constructionLines.push(pl);
		}
	}
}



LineProjector.prototype.enableLines = function()
{
	this.manualLine.enable();
	
	this.enableConstructionLines();
}

LineProjector.prototype.disableLines = function()
{
	this.manualLine.disable();
	
	this.disableConstructionLines();
}

LineProjector.prototype.enableConstructionLines = function()
{
	for (var i = 0; i < this.constructionLines.length; i++)
	{
		this.constructionLines[i].enable();
	}
}

LineProjector.prototype.disableConstructionLines = function()
{
	for (var i = 0; i < this.constructionLines.length; i++)
	{
		this.constructionLines[i].disable();
	}
}

LineProjector.prototype.updateLines = function()
{
	this.manualLine.update();
	
	for (var i = 0; i < this.constructionLines.length; i++)
	{
		this.constructionLines[i].update();
	}
}



function ProjectionLine(target, projectionCenter, surface, scene, earth, color) {
	this.target = target;
	this.projectionCenter = projectionCenter;
	this.surface = surface;
	this.color = color;
	this.scene = scene;
    this.earth = earth;
	this.lineMaterial = new THREE.LineBasicMaterial( { color: this.color } );

	this.lineGeometry = new THREE.Geometry();
	
	this.line = new THREE.Line( this.lineGeometry, this.lineMaterial );
	this.line.frustumCulled = false;
	
	this.state = "Enabled";
	
	this.update();
}


ProjectionLine.prototype.update = function()
{
	if (this.state == "Disabled")
		return
	
	var projectionWorldPosition = this.projectionCenter.sphere.getWorldPosition();
	var directionVector = this.target.clone().sub(projectionWorldPosition).normalize();
	
	var auxiliaryRaycaster = new THREE.Raycaster(projectionWorldPosition, directionVector.clone());
	
	var auxiliaryIntersectsSurface = auxiliaryRaycaster.intersectObject( this.surface.mesh );
    var auxiliaryIntersectsEarth   = auxiliaryRaycaster.intersectObject( this.earth.earthMesh );
	
    // neither intersection with globe nor with surface
    if (auxiliaryIntersectsEarth.length > 0 && auxiliaryIntersectsSurface.length == 0)
    {
		this.lineGeometry.vertices[0] = projectionWorldPosition.clone().add(directionVector.clone().multiplyScalar(1000));
    }
    else
    {
        if (auxiliaryIntersectsEarth[0].distance > auxiliaryIntersectsSurface[0].distance)
        {
            this.lineGeometry.vertices[0] = auxiliaryIntersectsEarth[0].point.clone();
        }
        else
        {
            this.lineGeometry.vertices[0] = auxiliaryIntersectsSurface[0].point.clone();
        }
    }
    
    this.lineGeometry.vertices[1] = projectionWorldPosition;
    this.lineGeometry.verticesNeedUpdate = true;
}


ProjectionLine.prototype.enable = function()
{
	this.scene.add(this.line);
	this.state = "Enabled";
}


ProjectionLine.prototype.disable = function()
{
	this.scene.remove(this.line);
	this.state = "Disabled";
}

ProjectionLine.prototype.reset = function()
{
	this.lineGeometry.vertices[0] = new THREE.Vector3();
	this.lineGeometry.vertices[1] = new THREE.Vector3();
	
	this.lineGeometry.verticesNeedUpdate = true;
	
	this.disable();
}




