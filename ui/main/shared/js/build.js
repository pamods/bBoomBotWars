var Build = (function() {
    var FALLBACK_ICON = 'coui://ui/main/game/live_game/img/build_bar/img_missing_unit.png';
    var pathWithoutExtensionMatch = /(.*)\.json[^\/]*$/;

    var iconForSpecId = function(id) {
        var match = null;
        if (id)
            match = pathWithoutExtensionMatch.exec(id);

        if (_.size(match) < 2)
            return FALLBACK_ICON;

        return 'coui:/' + match[1] + '_icon_buildbar.png';
    };

    var iconForUnit = function(unit) {
        if (!unit)
            return FALLBACK_ICON;
        return iconForSpecId(unit.id);
    };

    var HotkeyModel = function() {
        var self = this;

        self.SpecIdToGridMap = ko.observable({

            //"/pa/units/land/titan_structure/titan_structure.json": ["utility", 0],
            "/pa/units/land/control_module/control_module.json": ["utility", 1],
            "/pa/units/land/energy_plant_adv/energy_plant_adv.json": ["utility", 3],
            "/pa/units/land/metal_extractor_adv/metal_extractor_adv.json": ["utility", 4],
            //"/pa/units/orbital/delta_v_engine/delta_v_engine.json": ["utility", 7],
            "/pa/units/land/energy_plant/energy_plant.json": ["utility", 9],
            "/pa/units/land/metal_extractor/metal_extractor.json": ["utility", 10],
            //"/pa/units/land/land_barrier/land_barrier.json": ["utility", 12],
            "/pa/units/orbital/deep_space_radar/deep_space_radar.json": ["utility", 2],
            "/pa/units/land/energy_storage/energy_storage.json": ["utility", 15],
            "/pa/units/land/metal_storage/metal_storage.json": ["utility", 16],


            "/pa/units/air/titan_air/titan_air.json": ["factory", 2],
            "/pa/units/land/titan_bot/titan_bot.json": ["factory", 3],
            "/pa/units/land/titan_vehicle/titan_vehicle.json": ["factory", 4],
            "/pa/units/land/unit_cannon/unit_cannon.json": ["factory", 6],
            "/pa/units/sea/naval_factory_adv/naval_factory_adv.json": ["factory", 7],
            "/pa/units/air/air_factory_adv/air_factory_adv.json": ["factory", 8],
            "/pa/units/land/bot_factory_adv/bot_factory_adv.json": ["factory", 9],
            "/pa/units/land/vehicle_factory_adv/vehicle_factory_adv.json": ["factory", 10],
            "/pa/units/orbital/orbital_launcher/orbital_launcher.json": ["factory", 12],
            "/pa/units/sea/naval_factory/naval_factory.json": ["factory", 13],
            "/pa/units/air/air_factory/air_factory.json": ["factory", 14],
            "/pa/units/land/bot_factory/bot_factory.json": ["factory", 15],
            "/pa/units/land/vehicle_factory/vehicle_factory.json": ["factory", 16],
          
            /*
              "/pa/units/land/laser_defense_adv/laser_defense_adv.json": ["combat", 0],
              "/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json": ["combat", 2],
              "/pa/units/land/laser_defense/laser_defense.json": ["combat", 5],
              "/pa/units/land/air_defense_adv/air_defense_adv.json": ["combat", 6],
              "/pa/units/land/artillery_long/artillery_long.json": ["combat", 7],
              "/pa/units/sea/torpedo_launcher_adv/torpedo_launcher_adv.json": ["combat", 8],
              "/pa/units/land/nuke_launcher/nuke_launcher.json": ["combat", 4],
              "/pa/units/land/anti_nuke_launcher/anti_nuke_launcher.json": ["combat", 9],
              "/pa/units/land/laser_defense_single/laser_defense_single.json": ["combat", 10],
              "/pa/units/land/air_defense/air_defense.json": ["combat", 11],
              "/pa/units/land/artillery_short/artillery_short.json": ["combat", 12],
              "/pa/units/sea/torpedo_launcher/torpedo_launcher.json": ["combat", 13],
              "/pa/units/orbital/ion_defense/ion_defense.json": ["combat", 14],
            */
          
            "/pa/units/land/artillery_long/artillery_long.json": ["utility", 0],
            "/pa/units/land/laser_defense_single/laser_defense_single.json": ["utility", 12],
            "/pa/units/land/radar_adv/radar_adv.json": ["utility", 7],
            "/pa/units/land/radar/radar.json": ["utility", 13],
            "/pa/units/land/teleporter/teleporter.json": ["utility", 14],

            // Vehicle / utility factory:
            "/pa/units/land/fabrication_bot/fabrication_bot.json": ["vehicle", 12],
            "/pa/units/land/land_scout/land_scout.json": ["vehicle", 13],
            "/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json": ["vehicle", 14],

            // Advanced Vehicle / utility factory
            "/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json": ["vehicle", 6],
            "/pa/units/land/tank_heavy_armor/tank_heavy_armor.json": ["vehicle", 7],
            "/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json": ["vehicle", 8],
            "/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json": ["vehicle", 9],

            // Bot / Boom factory:
            "/pa/units/land/bot_aa/bot_aa.json": ["bot", 13],
            "/pa/units/land/bot_bomb/bot_bomb.json": ["bot", 14],
            "/pa/units/air/air_scout/air_scout.json": ["bot", 15],
            "/pa/units/land/bot_tesla/bot_tesla.json": ["bot", 16],

            // Orbital
            "/pa/units/orbital/orbital_probe/orbital_probe.json": ["orbital", 16],

            "/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json": ["air", 5],
            "/pa/units/air/gunship/gunship.json": ["air", 6],
            "/pa/units/air/bomber_adv/bomber_adv.json": ["air", 7],
            "/pa/units/air/transport/transport.json": ["air", 8],
            "/pa/units/air/fabrication_aircraft/fabrication_aircraft.json": ["air", 10],
            "/pa/units/air/fighter/fighter.json": ["air", 11],
            "/pa/units/air/bomber/bomber.json": ["air", 12],

            "/pa/units/land/land_mine/land_mine.json": ["ammo", 14],
          
            //"/pa/units/land/anti_nuke_launcher/anti_nuke_launcher_ammo.json": ["ammo", 13],
            //"/pa/units/land/nuke_launcher/nuke_launcher_ammo.json": ["ammo", 14],
        });
    };

    return {
        iconForSpecId: iconForSpecId,
        iconForUnit: iconForUnit,
        HotkeyModel: HotkeyModel,
    };
})();