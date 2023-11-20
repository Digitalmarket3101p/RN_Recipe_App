class Meal {
    constructor(id,categoryIds,title,affordability,complexity,imgUrl,duration,ingredients,steps,
        isGlutenfree,isVegan,isVeg,isLactoseFree){
this.id=id;
this.categoryIds=categoryIds;
this.imgUrl=imgUrl;
this.title=title;
this.affordability=affordability;
this.complexity=complexity;
this.duration=duration;
this.ingredients=ingredients;
this.steps=steps;
this.isGlutenfree=isGlutenfree;
this.isVegan=isVegan;
this.isVeg=isVeg;
this.isLactoseFree=isLactoseFree

    }
}

export default Meal;