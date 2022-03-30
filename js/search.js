(function($) {
  'use strict';
  $(function() {
  var jets = [new Jets({
    searchTag: "#playthrough_search",
    contentTag: "#playthrough_list ul"
  }), new Jets({
    searchTag: "#npc_quests_search",
    contentTag: "#npc_quests_list ul"
  }), new Jets({
    searchTag: "#achievements_search",
    contentTag: "#achievements_list tbody"
  }), new Jets({
    searchTag: "#bosses_search",
    contentTag: "#bosses_list tbody"
  }), new Jets({
    searchTag: "#legacy_search",
    contentTag: "#legacy_list tbody"
  }), new Jets({
    searchTag: "#caves_search",
    contentTag: "#caves_list tbody"
  }), new Jets({
    searchTag: "#evergaols_search",
    contentTag: "#evergaols_list tbody"
  }), new Jets({
    searchTag: "#flasks_search",
    contentTag: "#flasks_list ul"
  }), new Jets({
    searchTag: "#crystal_tears_search",
    contentTag: "#crystal_tears_list tbody"
  }), new Jets({
    searchTag: "#legendaries_search",
    contentTag: "#legendaries_list ul"
  }), new Jets({
    searchTag: "#weapons_search",
    contentTag: "#weapons_list ul"
  }), new Jets({
    searchTag: "#talismans_search",
    contentTag: "#talismans_list tbody"
  }), new Jets({
    searchTag: "#sorceries_search",
    contentTag: "#sorceries_list ul"
  }), new Jets({
    searchTag: "#dragon_hearts_death_roots_search",
    contentTag: "#dragon_hearts_death_roots_list ul"
  }), new Jets({
    searchTag: "#memory_stones_talisman_pouches_search",
    contentTag: "#memory_stones_talisman_pouches_list ul"
  }), new Jets({
    searchTag: "#whetstones_search",
    contentTag: "#whetstones_list tbody"
  }), new Jets({
    searchTag: "#bell_bearings_search",
    contentTag: "#bell_bearings_list ul"
  }), new Jets({
    searchTag: "#cookbooks_search",
    contentTag: "#cookbooks_list ul"
  }), new Jets({
    searchTag: "#ashesofwar_search",
    contentTag: "#ashesofwar_list tbody"
  }), new Jets({
    searchTag: "#gestures_search",
    contentTag: "#gestures_list ul"
  }), new Jets({
    searchTag: "#paintings_search",
    contentTag: "#paintings_list tbody"
})];
  $("#playthrough_search").keyup(function() {
    $("#playthrough_list").unhighlight();
    $("#playthrough_list").highlight($(this).val());
  });
  $("#npc_quests_search").keyup(function() {
    $("#npc_quests_list").unhighlight();
    $("#npc_quests_list").highlight($(this).val());
  });
  $("#achievements_search").keyup(function() {
    $("#achievements_list").unhighlight();
    $("#achievements_list").highlight($(this).val());
  });
  $("#bosses_search").keyup(function() {
    $("#bosses_list").unhighlight();
    $("#bosses_list").highlight($(this).val());
  });
  $("#legacy_search").keyup(function() {
    $("#legacy_list").unhighlight();
    $("#legacy_list").highlight($(this).val());
  });
  $("#caves_search").keyup(function() {
    $("#caves_list").unhighlight();
    $("#caves_list").highlight($(this).val());
  });
  $("#evergaols_search").keyup(function() {
    $("#evergaols_list").unhighlight();
    $("#evergaols_list").highlight($(this).val());
  });
  $("#flasks_search").keyup(function() {
    $("#flasks_list").unhighlight();
    $("#flasks_list").highlight($(this).val());
  });
  $("#crystal_tears_search").keyup(function() {
    $("#crystal_tears_list").unhighlight();
    $("#crystal_tears_list").highlight($(this).val());
  });
  $("#legendaries_search").keyup(function() {
    $("#legendaries_list").unhighlight();
    $("#legendaries_list").highlight($(this).val());
  });
  $("#weapons_search").keyup(function() {
    $("#weapons_list").unhighlight();
    $("#weapons_list").highlight($(this).val());
  });
  $("#talismans_search").keyup(function() {
    $("#talismans_list").unhighlight();
    $("#talismans_list").highlight($(this).val());
  });
  $("#sorceries_search").keyup(function() {
    $("#sorceries_list").unhighlight();
    $("#sorceries_list").highlight($(this).val());
  });
  $("#dragon_hearts_death_roots_search").keyup(function() {
    $("#dragon_hearts_death_roots_list").unhighlight();
    $("#dragon_hearts_death_roots_list").highlight($(this).val());
  });
  $("#memory_stones_talisman_pouches_search").keyup(function() {
    $("#memory_stones_talisman_pouches_list").unhighlight();
    $("#memory_stones_talisman_pouches_list").highlight($(this).val());
  });
  $("#whetstones_search").keyup(function() {
    $("#whetstones_list").unhighlight();
    $("#whetstones_list").highlight($(this).val());
  });
  $("#bell_bearings_search").keyup(function() {
    $("#bell_bearings_list").unhighlight();
    $("#bell_bearings_list").highlight($(this).val());
  });
  $("#cookbooks_search").keyup(function() {
    $("#cookbooks_list").unhighlight();
    $("#cookbooks_list").highlight($(this).val());
  });
  $("#ashesofwar_search").keyup(function() {
    $("#ashesofwar_list").unhighlight();
    $("#ashesofwar_list").highlight($(this).val());
  });
  $("#gestures_search").keyup(function() {
    $("#gestures_list").unhighlight();
    $("#gestures_list").highlight($(this).val());
  });
  $("#paintings_search").keyup(function() {
    $("#paintings_list").unhighlight();
    $("#paintings_list").highlight($(this).val());
  });
});
})( jQuery );
