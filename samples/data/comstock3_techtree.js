var famdata = [

  { id: 1, parents: [], description: "", title: "Generated buildstock.csv columns", itemTitleColor: "white" },
  { id: 2, parents: [], title: "Run Measures", itemTitleColor: "white" },
  { id: 0, parents: [], title: "Sample TSV files", itemTitleColor: "white" },

  //TSVS

  { id: 3, parents: [0], title: "climate_Zone", itemTitleColor: "#eee", groupTitle: "tsv" },
  { id: 4, parents: [3], title: "county_id", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 5, parents: [4], title: "building_type", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 6, parents: [4], title: "state_id", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 7, parents: [5], title: "hvac_tst_htg_delta_f", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 8, parents: [5], title: "hvac_tst_clg_delta_f", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 9, parents: [5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 10, parents: [5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 11, parents: [3,5], title: "number_stories", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 12, parents: [3,5], title: "year_built", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 13, parents: [3,5], title: "rentable_area", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 14, parents: [5],title: "", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 15, parents: [5,23], title: "hvac_system_type", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 16, parents: [5,14,23], title: "service_water_heating_fuel", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 17, parents: [5], title: "weekday_start_time", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 18, parents: [17], title: "weekday_duration", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 19, parents: [5], title: "weekend_start_time", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 20, parents: [19], title: "weekend_duration", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 21, parents: [5], title: "hvac_tst_htg_sp_f", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 22, parents: [5], title: "hvac_tst_clg_sp_f", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 23, parents: [6], title: "region", itemTitleColor: "#eee", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right, position: 1 },

 //   bldg stock
 
  { id: 27, parents: [10,5], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 28, parents: [10,5], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
  { id: 120, parents: [10,5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 24, parents: [6], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 110, parents: [6], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 111, parents: [6], title: "energy_code_compliance_hvac", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 112, parents: [6], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 113, parents: [6], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 114, parents: [6], title: "energy_code_compliance_roof", itemTitleColor: "#eee", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 115, parents: [6], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 116, parents: [6], title: "energy_code_compliance_walls", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 117, parents: [6], title: "energy_code_compliance_windows", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },


 { id: 130, parents: [1,32], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 131, parents: [1,140], title: "energy_code_followed_during_original_exterior_lighting_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 132, parents: [1,141], title: "energy_code_followed_during_original_hvac_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 133, parents: [1,142], title: "energy_code_followed_during_original_interior_equipment_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 134, parents: [1,143], title: "energy_code_followed_during_original_interior_lighting_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 135, parents: [1,144], title: "energy_code_followed_during_original_roof_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 136, parents: [1,145], title: "energy_code_followed_during_original_service_water_heating_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 137, parents: [1,146], title: "energy_code_followed_during_original_wall_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 138, parents: [1,24,147], title: "energy_code_followed_during_original__windows_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },


 { id: 32, parents: [1,60,6], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 140, parents: [1,52], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 141, parents: [1,24,6], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 142, parents: [1,24,6], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 143, parents: [1,24,6], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 144, parents: [1,24,6], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 145, parents: [1,24,6], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 146, parents: [1,24,6], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 147, parents: [1,24,6], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },


 { id: 33, parents: [1,24,6,110,140], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 90, parents: [1,24,6,111,141], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 91, parents: [1,24,6,112,142], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 92, parents: [1,24,6,113], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 93, parents: [1,24,6,114,144], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 94, parents: [1,24,6,115,144], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 95, parents: [1,24,6,116,146], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 96, parents: [1,24,6,117,147], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 83, parents: [1,85], title: "aspect_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 84, parents: [1,85], title: "building_shape", itemTitleColor: "#a7e3f4", groupTitle: "cvs",  placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 85, parents: [1,5], title: "building_type", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 88, parents: [1,85], title: "building_subtype", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 86, parents: [1,3], title: "climate_zone", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 87, parents: [1,4], title: "county_id", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 36, parents: [1,11], title: "number_stories", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 36, parents: [1], title: "ownership_status", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 37, parents: [1], title: "party_responsible_for_operation", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 38, parents: [1,9,5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 39, parents: [1,9,5], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 40, parents: [1,9,5], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },


 { id: 127, parents: [1], title: "heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },


 { id: 121, parents: [1], title: "hvac_system_type", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 122, parents: [1], title: "hvac_tst_clg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 123, parents: [1], title: "hvac_tst_clg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 124, parents: [1], title: "hvac_tst_htg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 125, parents: [1], title: "hvac_tst_htg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 126, parents: [1], title: "hvac_night_variability", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 41, parents: [1], title: "purchase_input_responsibility", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 42, parents: [23], title: "region", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 43, parents: [13], title: "rentable_area", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 44, parents: [1], title: "rotation", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 45, parents: [1], title: "service_water_heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 46, parents: [6], title: "state_id", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 47, parents: [1,48], title: "weekday_duration", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 48, parents: [1], title: "weekday_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 49, parents: [1,50], title: "weekend_duration", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 50, parents: [1], title: "weekend_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 51, parents: [1,32,43], title: "window_wall_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 60, parents: [1,12], title: "year_bin_of_original_building_construction", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 52, parents: [1,12,62], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 53, parents: [1,12,62], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 54, parents: [1,12,62], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 55, parents: [1,12,62], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 56, parents: [1,12,62], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 57, parents: [1,12,62], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 58, parents: [1,12,24,6], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 59, parents: [1,12,24,6], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 61, parents: [12], title: "year_built", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 }, 
 { id: 62, parents: [1], title: "year_of_simulation", itemTitleColor: "#a7e3f4",  groupTitle: "cvs", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 



 //measures subs
 { id: 63, parents: [2,62], title: "add_blinds_to_selected_windows", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 64, parents: [2,126], title: "add_hvac_nighttime_operation_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 65, parents: [2,122,123,124,125], title: "add_thermostat_setpoint_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 66, parents: [2,62,86,87], title: "ChangeBuildingLocation", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 67, parents: [2,33,90,91,92,93,94,95,96,35,43,44,51,83,85,86,88,130,131,132,133,134,135,136,137,138], title: "create_bar_from_building_type_ratios", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 68, parents: [2,33,90,91,92,93,94,95,96,35,36,45,47,48,49,50,86,121,130,131,132,133,134,135,136,137,138], title: "create_typical_building_from_model", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 69, parents: [2,39,40], title: "set_electric_equipment_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 70, parents: [2,86,97,131], title: "set_exterior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 71, parents: [2,127], title: "set_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 72, parents: [2,86,98,132], title: "set_hvac_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 73, parents: [2,86,99,133], title: "set_interior_equipment_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 74, parents: [2,27,28], title: "set_interior_lighting_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 75, parents: [2,86,100,134], title: "set_interior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 76, parents: [2,86,101,135], title: "set_roof_template", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 77, parents: [2,45], title: "set_service_water_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 78, parents: [2,86,102,136], title: "set_service_water_heating_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 79, parents: [2,62], title: "set_space_type_load_subcategories", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 80, parents: [2,86,103,137], title: "set_wall_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 { id: 81, parents: [2,86,104,138], title: "set_window_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },

 { id: 82, parents: [2,62,61], title: "simulation_settings", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right, position: 1 },
 

];