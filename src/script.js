var converter = new showdown.Converter();

$(document).ready(() => {
    $("#activate-markdown").click(() => {
        let head = `#${$("#title").val()}`
        $("#markdown-head").html(converter.makeHtml(head))
        let md = $("#long-description").val();
        $("#markdown-preview").html(converter.makeHtml(md))
    });
});