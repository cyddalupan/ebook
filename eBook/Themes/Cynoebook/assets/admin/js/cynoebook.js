$(".banner-image").on("click",(function(e){new MediaPicker({type:"image"}).on("select",(function(n){$(e.currentTarget).find("i").remove(),$(e.currentTarget).find("img").attr("src",n.path).removeClass("hide"),$(e.currentTarget).find(".banner-file-id").val(n.id)}))}));
//# sourceMappingURL=cynoebook.js.map