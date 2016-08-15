//= require jquery
//= require jquery_ujs
//= require tether
//= require turbolinks
//= require bootstrap
//= require_tree .


$(function() {
    $("#events_search input").keyup(function() {
        $.get($("#events_search").attr("action"),$("#events_search").serialize(),null,'script');
        return false;
    });
});