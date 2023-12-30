$(document).ready(function () {
    $("#deneme").click(function () {
        var rectElement = $("#am_deneme");

        var xValue = rectElement.attr("x");
        var yValue = rectElement.attr("y");
        var widthValue = rectElement.attr("width");
        var heightValue = rectElement.attr("height");
        var transformValue = rectElement.attr("transform");

        // Yeni g elemanını oluştur
        var newGroup = $("<g>");
        // Yeni img elemanını oluştur
        var newImg = $("<img>")
            .attr("src", "svg\SailBoat.svg") // Resmin yolunu belirtin
            .attr("alt", "")
            .css({
                "position": "absolute",
                "x": xValue + "px",
                "y": yValue + "px",
                "width": widthValue + "px",
                "height": heightValue + "px",
                "transform": transformValue,
                // Örnek olarak bir kenarlık ekleyebilirsiniz
            });

        // Yeni img elemanını yeni g elemanına ekle
        newGroup.append(newImg);
        // Yeni rect elemanını sayfaya ekle
        $("#result").html(newRect);
    });
});