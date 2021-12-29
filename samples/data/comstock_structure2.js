﻿var simpleRombus = {
    cursorItem: 1,
    annotations: [],
    items: [
       //TSVS
  { id: 2, parents: [], title: "unknown", itemTitleColor: "#ddd", groupTitle: "tsv" },

  { id: 3, parents: [], title: "climate_zone", itemTitleColor: "#ddd", groupTitle: "tsv" },
  { id: 150, parents: [], title: "simulation_year", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 151, parents: [], title: "rotation", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 4, parents: [3], title: "county_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 5, parents: [4], title: "building_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 6, parents: [4], title: "state_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 7, parents: [5], title: "hvac_tst_htg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 8, parents: [5], title: "hvac_tst_clg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 9, parents: [5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 170, parents: [9,5], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 171, parents: [9,5], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 10, parents: [5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 172, parents: [10,5], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 173, parents: [10,5], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 11, parents: [3,5], title: "number_stories", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 12, parents: [3,5], title: "year_built", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 174, parents: [12], title: "year_bin_of_original_building_construction", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 175, parents: [12,150], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 176, parents: [12,150], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 177, parents: [12,150], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 178, parents: [12,150], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 179, parents: [12,150], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 180, parents: [12,150], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 181, parents: [12,150], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 182, parents: [12,150], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 13, parents: [3,5], title: "rentable_area", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 15, parents: [5,23], title: "hvac_system_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 16, parents: [5], title: "service_water_heating_fuel", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right,},

  { id: 17, parents: [5], title: "weekday_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 18, parents: [17], title: "weekday_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 19, parents: [5], title: "weekend_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 20, parents: [19], title: "weekend_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 21, parents: [5], title: "hvac_tst_htg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 22, parents: [5], title: "hvac_tst_clg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 25, parents: [5], title: "hvac_night_variability", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  
  { id: 23, parents: [6], title: "region", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 156, parents: [6], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 157, parents: [6], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 158, parents: [6], title: "energy_code_compliance_hvac", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 159, parents: [6], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 160, parents: [6], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 161, parents: [6], title: "energy_code_compliance_roof", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 162, parents: [6], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 163, parents: [6], title: "energy_code_compliance_walls", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 164, parents: [6], title: "energy_code_compliance_windows", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 152, parents: [155], title: "building_subtype", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 153, parents: [155], title: "building_shape", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 154, parents: [153], title: "aspect_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 155, parents: [], title: "", itemTitleColor: "#ddd", groupTitle: "", placementType: primitives.AdviserPlacementType.Right},


 { id: 190, parents: [174], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 191, parents: [175,157], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 192, parents: [176,158], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 193, parents: [177,159], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 194, parents: [178,160], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 195, parents: [179,161], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 196, parents: [180,162], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 197, parents: [181,163], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 198, parents: [182,164], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


 { id: 200, parents: [190,156], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 202, parents: [191,157], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 203, parents: [192,158], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 204, parents: [193,159], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 205, parents: [194,160], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 206, parents: [195,161], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 207, parents: [196,162], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 208, parents: [197,163], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 209, parents: [198,164], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 201, parents: [174,5,13], title: "window_wall_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 //   bldg stock
 
  { id: 27, parents: [10], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right, position: 2 },
  { id: 28, parents: [172], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 120, parents: [173], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 24, parents: [156], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 110, parents: [157], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 111, parents: [158], title: "energy_code_compliance_hvac", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 112, parents: [159], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 113, parents: [160], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 114, parents: [161], title: "energy_code_compliance_roof", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 115, parents: [162], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 116, parents: [163], title: "energy_code_compliance_walls", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 117, parents: [164], title: "energy_code_compliance_windows", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 130, parents: [200], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 32, parents: [190], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 140, parents: [191], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 141, parents: [192], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 142, parents: [193], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 143, parents: [194], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 144, parents: [195], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 145, parents: [196], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 146, parents: [197], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 147, parents: [198], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 33, parents: [202], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 90, parents: [203], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 91, parents: [204], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 92, parents: [205], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 93, parents: [206], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 94, parents: [207], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 95, parents: [208], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 96, parents: [209], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 83, parents: [154], title: "aspect_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 84, parents: [153], title: "building_shape", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv",  placementType: primitives.AdviserPlacementType.Right},
 { id: 85, parents: [5], title: "building_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 88, parents: [152], title: "building_subtype", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 86, parents: [3], title: "climate_zone", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 87, parents: [4], title: "county_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 36, parents: [11], title: "number_stories", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 36, parents: [2], title: "ownership_status", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 37, parents: [2], title: "party_responsible_for_operation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 38, parents: [9], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 39, parents: [170], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 40, parents: [171], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 127, parents: [121], title: "heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 121, parents: [15], title: "hvac_system_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 122, parents: [21], title: "hvac_tst_clg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 123, parents: [22], title: "hvac_tst_clg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 124, parents: [7], title: "hvac_tst_htg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 125, parents: [21], title: "hvac_tst_htg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 126, parents: [25], title: "hvac_night_variability", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 41, parents: [2], title: "purchase_input_responsibility", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 42, parents: [23], title: "region", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 43, parents: [13], title: "rentable_area", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 44, parents: [151], title: "rotation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 45, parents: [16], title: "service_water_heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 46, parents: [6], title: "state_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 47, parents: [18], title: "weekday_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 48, parents: [17], title: "weekday_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 49, parents: [20], title: "weekend_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 50, parents: [19], title: "weekend_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 51, parents: [32,43], title: "window_wall_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 60, parents: [174], title: "year_bin_of_original_building_construction", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 52, parents: [175], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 53, parents: [176], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 54, parents: [177], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 55, parents: [178], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 56, parents: [179], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 57, parents: [180], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 58, parents: [181], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 59, parents: [182], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 61, parents: [12], title: "year_built", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right}, 

 { id: 62, parents: [150], title: "year_of_simulation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 



 //measures subs
 { id: 63, parents: [62], title: "add_blinds_to_selected_windows", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 64, parents: [126], title: "add_hvac_nighttime_operation_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 65, parents: [122,123,124,125], title: "add_thermostat_setpoint_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 66, parents: [62,86,87], title: "ChangeBuildingLocation", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 67, parents: [33,36,43,44,51,90,91,92,93,94,95,96,35,43,44,51,83,85,86,88,130,202], title: "create_bar_from_building_type_ratios", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 68, parents: [33,45,47,48,49,50,90,91,92,93,94,95,96,35,36,45,47,48,49,50,86,121,130,], title: "create_typical_building_from_model", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 69, parents: [39,40], title: "set_electric_equipment_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 70, parents: [33,86,90,97,131], title: "set_exterior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 71, parents: [127], title: "set_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 72, parents: [86,98,132], title: "set_hvac_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 73, parents: [86,92,99], title: "set_interior_equipment_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 74, parents: [27,28], title: "set_interior_lighting_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 75, parents: [86,100], title: "set_interior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 76, parents: [86,93,101], title: "set_roof_template", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 77, parents: [45], title: "set_service_water_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 78, parents: [86,94,102], title: "set_service_water_heating_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 79, parents: [62], title: "set_space_type_load_subcategories", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 80, parents: [86,95,103], title: "set_wall_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 81, parents: [86,96], title: "set_window_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},

 { id: 82, parents: [62], title: "simulation_settings", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 
    ]
  };
  
  var simpleFamily = {
    cursorItem: 1,
    annotations: [],
    items: [
       //TSVS
  { id: 2, parents: [], title: "unknown", itemTitleColor: "#ddd", groupTitle: "tsv" },

  { id: 3, parents: [], title: "climate_zone", itemTitleColor: "#ddd", groupTitle: "tsv" },
  { id: 150, parents: [], title: "simulation_year", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 151, parents: [], title: "rotation", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 4, parents: [3], title: "county_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 5, parents: [4], title: "building_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 6, parents: [4], title: "state_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 7, parents: [5], title: "hvac_tst_htg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 8, parents: [5], title: "hvac_tst_clg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 9, parents: [5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 170, parents: [9,5], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 171, parents: [9,5], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 10, parents: [5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 172, parents: [10,5], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 173, parents: [10,5], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 11, parents: [3,5], title: "number_stories", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 12, parents: [3,5], title: "year_built", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 174, parents: [12], title: "year_bin_of_original_building_construction", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 175, parents: [12,150], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 176, parents: [12,150], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 177, parents: [12,150], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 178, parents: [12,150], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 179, parents: [12,150], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 180, parents: [12,150], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 181, parents: [12,150], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 182, parents: [12,150], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 13, parents: [3,5], title: "rentable_area", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 15, parents: [5,23], title: "hvac_system_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 16, parents: [5], title: "service_water_heating_fuel", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right,},

  { id: 17, parents: [5], title: "weekday_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 18, parents: [17], title: "weekday_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 19, parents: [5], title: "weekend_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 20, parents: [19], title: "weekend_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 21, parents: [5], title: "hvac_tst_htg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 22, parents: [5], title: "hvac_tst_clg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 25, parents: [5], title: "hvac_night_variability", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  
  { id: 23, parents: [6], title: "region", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 156, parents: [6], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 157, parents: [6], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 158, parents: [6], title: "energy_code_compliance_hvac", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 159, parents: [6], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 160, parents: [6], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 161, parents: [6], title: "energy_code_compliance_roof", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 162, parents: [6], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 163, parents: [6], title: "energy_code_compliance_walls", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 164, parents: [6], title: "energy_code_compliance_windows", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 152, parents: [155], title: "building_subtype", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 153, parents: [155], title: "building_shape", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 154, parents: [153], title: "aspect_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 155, parents: [], title: "", itemTitleColor: "#ddd", groupTitle: "", placementType: primitives.AdviserPlacementType.Right},


 { id: 190, parents: [174], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 191, parents: [175,157], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 192, parents: [176,158], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 193, parents: [177,159], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 194, parents: [178,160], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 195, parents: [179,161], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 196, parents: [180,162], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 197, parents: [181,163], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 198, parents: [182,164], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


 { id: 200, parents: [190,156], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 202, parents: [191,157], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 203, parents: [192,158], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 204, parents: [193,159], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 205, parents: [194,160], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 206, parents: [195,161], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 207, parents: [196,162], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 208, parents: [197,163], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 209, parents: [198,164], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 201, parents: [174,5,13], title: "window_wall_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 //   bldg stock
 
  { id: 27, parents: [10], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right, position: 2 },
  { id: 28, parents: [172], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 120, parents: [173], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 24, parents: [156], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 110, parents: [157], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 111, parents: [158], title: "energy_code_compliance_hvac", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 112, parents: [159], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 113, parents: [160], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 114, parents: [161], title: "energy_code_compliance_roof", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 115, parents: [162], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 116, parents: [163], title: "energy_code_compliance_walls", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 117, parents: [164], title: "energy_code_compliance_windows", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 130, parents: [200], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 32, parents: [190], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 140, parents: [191], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 141, parents: [192], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 142, parents: [193], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 143, parents: [194], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 144, parents: [195], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 145, parents: [196], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 146, parents: [197], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 147, parents: [198], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 33, parents: [202], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 90, parents: [203], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 91, parents: [204], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 92, parents: [205], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 93, parents: [206], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 94, parents: [207], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 95, parents: [208], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 96, parents: [209], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 83, parents: [154], title: "aspect_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 84, parents: [153], title: "building_shape", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv",  placementType: primitives.AdviserPlacementType.Right},
 { id: 85, parents: [5], title: "building_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 88, parents: [152], title: "building_subtype", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 86, parents: [3], title: "climate_zone", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 87, parents: [4], title: "county_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 36, parents: [11], title: "number_stories", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 36, parents: [2], title: "ownership_status", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 37, parents: [2], title: "party_responsible_for_operation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 38, parents: [9], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 39, parents: [170], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 40, parents: [171], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 127, parents: [121], title: "heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 121, parents: [15], title: "hvac_system_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 122, parents: [21], title: "hvac_tst_clg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 123, parents: [22], title: "hvac_tst_clg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 124, parents: [7], title: "hvac_tst_htg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 125, parents: [21], title: "hvac_tst_htg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 126, parents: [25], title: "hvac_night_variability", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 41, parents: [2], title: "purchase_input_responsibility", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 42, parents: [23], title: "region", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 43, parents: [13], title: "rentable_area", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 44, parents: [151], title: "rotation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 45, parents: [16], title: "service_water_heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 46, parents: [6], title: "state_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 47, parents: [18], title: "weekday_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 48, parents: [17], title: "weekday_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 49, parents: [20], title: "weekend_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 50, parents: [19], title: "weekend_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 51, parents: [32,43], title: "window_wall_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 60, parents: [174], title: "year_bin_of_original_building_construction", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 52, parents: [175], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 53, parents: [176], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 54, parents: [177], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 55, parents: [178], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 56, parents: [179], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 57, parents: [180], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 58, parents: [181], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 59, parents: [182], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 61, parents: [12], title: "year_built", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right}, 

 { id: 62, parents: [150], title: "year_of_simulation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 



 //measures subs
 { id: 63, parents: [62], title: "add_blinds_to_selected_windows", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 64, parents: [126], title: "add_hvac_nighttime_operation_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 65, parents: [122,123,124,125], title: "add_thermostat_setpoint_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 66, parents: [62,86,87], title: "ChangeBuildingLocation", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 67, parents: [33,36,43,44,51,90,91,92,93,94,95,96,35,43,44,51,83,85,86,88,130,202], title: "create_bar_from_building_type_ratios", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 68, parents: [33,45,47,48,49,50,90,91,92,93,94,95,96,35,36,45,47,48,49,50,86,121,130,], title: "create_typical_building_from_model", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 69, parents: [39,40], title: "set_electric_equipment_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 70, parents: [33,86,90,97,131], title: "set_exterior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 71, parents: [127], title: "set_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 72, parents: [86,98,132], title: "set_hvac_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 73, parents: [86,92,99], title: "set_interior_equipment_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 74, parents: [27,28], title: "set_interior_lighting_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 75, parents: [86,100], title: "set_interior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 76, parents: [86,93,101], title: "set_roof_template", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 77, parents: [45], title: "set_service_water_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 78, parents: [86,94,102], title: "set_service_water_heating_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 79, parents: [62], title: "set_space_type_load_subcategories", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 80, parents: [86,95,103], title: "set_wall_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 81, parents: [86,96], title: "set_window_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},

 { id: 82, parents: [62], title: "simulation_settings", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
    ]
  };
  
  
  var simpleSandClock = {
    cursorItem: 5,
    annotations: [],
    items: [
   //TSVS
   { id: 2, parents: [null], title: "unknown", itemTitleColor: "#ddd", groupTitle: "tsv" },

   { id: 3, parents: [null], title: "climate_zone", itemTitleColor: "#ddd", groupTitle: "tsv" },
   { id: 0, parents: [null], title: "simulation_year", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 1, parents: [null], title: "rotation", itemTitleColor: "#ddd", groupTitle: "tsv"},
   { id: 155, parents: [null], isVisible: false},
 
 
   { id: 4, parents: [3], title: "county_id", itemTitleColor: "#ddd", groupTitle: "tsv"},
 
   { id: 5, parents: [4], title: "building_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 6, parents: [4], title: "state_id", itemTitleColor: "#ddd", groupTitle: "tsv"},
 
   { id: 7, parents: [5], title: "hvac_tst_htg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 8, parents: [5], title: "hvac_tst_clg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 9, parents: [5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 170, parents: [9,5], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 171, parents: [9,5], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 10, parents: [5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 172, parents: [10,5], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 173, parents: [10,5], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
 
   { id: 11, parents: [3,5], title: "number_stories", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 12, parents: [3,5], title: "year_built", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 174, parents: [12], title: "year_bin_of_original_building_construction", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 175, parents: [12,0], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 176, parents: [12,0], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 177, parents: [12,0], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 178, parents: [12,0], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 179, parents: [12,0], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 180, parents: [12,0], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 181, parents: [12,0], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 182, parents: [12,0], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 13, parents: [3,5], title: "rentable_area", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 400, parents: [5], isVisible: false, placementType: primitives.AdviserPlacementType.Right},
   { id: 15, parents: [5,23], title: "hvac_system_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 16, parents: [5], title: "service_water_heating_fuel", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right,},
 
   { id: 17, parents: [5], title: "weekday_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 18, parents: [17], title: "weekday_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 19, parents: [5], title: "weekend_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 20, parents: [19], title: "weekend_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 21, parents: [5], title: "hvac_tst_htg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 22, parents: [5], title: "hvac_tst_clg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 25, parents: [5], title: "hvac_night_variability", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   
   { id: 23, parents: [6], title: "region", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 156, parents: [6], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 157, parents: [6], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 158, parents: [6], title: "energy_code_compliance_hvac", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 159, parents: [6], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 160, parents: [6], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 161, parents: [6], title: "energy_code_compliance_roof", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 162, parents: [6], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 163, parents: [6], title: "energy_code_compliance_walls", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 164, parents: [6], title: "energy_code_compliance_windows", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 152, parents: [155], title: "building_subtype", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 153, parents: [155], title: "building_shape", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 154, parents: [153], title: "aspect_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   
 
 
  { id: 190, parents: [174], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 191, parents: [175,157], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 192, parents: [176,158], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 193, parents: [177,159], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 194, parents: [178,160], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 195, parents: [179,161], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 196, parents: [180,162], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 197, parents: [181,163], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 198, parents: [182,164], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 200, parents: [190,156], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 202, parents: [191,157], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 203, parents: [192,158], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 204, parents: [193,159], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 205, parents: [194,160], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 206, parents: [195,161], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 207, parents: [196,162], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 208, parents: [197,163], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 209, parents: [198,164], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 201, parents: [174,5,13], title: "window_wall_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
  //   bldg stock
  
   { id: 27, parents: [10], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right, position: 2 },
   { id: 28, parents: [172], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
   { id: 120, parents: [173], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 24, parents: [156], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 110, parents: [157], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 111, parents: [158], title: "energy_code_compliance_hvac", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 112, parents: [159], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 113, parents: [160], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 114, parents: [161], title: "energy_code_compliance_roof", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 115, parents: [162], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 116, parents: [163], title: "energy_code_compliance_walls", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 117, parents: [164], title: "energy_code_compliance_windows", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 130, parents: [200], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 32, parents: [190], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 140, parents: [191], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 141, parents: [192], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 142, parents: [193], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 143, parents: [194], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 144, parents: [195], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 145, parents: [196], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 146, parents: [197], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 147, parents: [198], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 33, parents: [202], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 90, parents: [203], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 91, parents: [204], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 92, parents: [205], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 93, parents: [206], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 94, parents: [207], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 95, parents: [208], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 96, parents: [209], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 83, parents: [154], title: "aspect_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 84, parents: [153], title: "building_shape", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv",  placementType: primitives.AdviserPlacementType.Right},
  { id: 85, parents: [5], title: "building_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 88, parents: [152], title: "building_subtype", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 86, parents: [3], title: "climate_zone", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 87, parents: [4], title: "county_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 36, parents: [11], title: "number_stories", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 36, parents: [2], title: "ownership_status", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 37, parents: [2], title: "party_responsible_for_operation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 38, parents: [9], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 39, parents: [170], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 40, parents: [171], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 127, parents: [121], title: "heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 121, parents: [15], title: "hvac_system_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 122, parents: [21], title: "hvac_tst_clg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 123, parents: [22], title: "hvac_tst_clg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 124, parents: [7], title: "hvac_tst_htg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 125, parents: [21], title: "hvac_tst_htg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 126, parents: [25], title: "hvac_night_variability", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 41, parents: [2], title: "purchase_input_responsibility", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 42, parents: [23], title: "region", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 43, parents: [13], title: "rentable_area", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 44, parents: [1], title: "rotation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 45, parents: [16], title: "service_water_heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 46, parents: [6], title: "state_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 47, parents: [18], title: "weekday_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 48, parents: [17], title: "weekday_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 49, parents: [20], title: "weekend_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 50, parents: [19], title: "weekend_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 51, parents: [32,43], title: "window_wall_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 60, parents: [174], title: "year_bin_of_original_building_construction", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 52, parents: [175], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 53, parents: [176], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 54, parents: [177], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 55, parents: [178], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 56, parents: [179], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 57, parents: [180], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 58, parents: [181], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 59, parents: [182], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 61, parents: [12], title: "year_built", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right}, 
 
  { id: 62, parents: [0], title: "year_of_simulation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  
 
 
 
  //measures subs
  { id: 63, parents: [62], title: "add_blinds_to_selected_windows", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 64, parents: [126], title: "add_hvac_nighttime_operation_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 65, parents: [122,123,124,125], title: "add_thermostat_setpoint_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 
  { id: 66, parents: [62,86,87], title: "ChangeBuildingLocation", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 
  { id: 67, parents: [33,36,43,44,51,90,91,92,93,94,95,96,35,43,44,51,83,85,86,88,130,202], title: "create_bar_from_building_type_ratios", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
  { id: 68, parents: [33,45,47,48,49,50,90,91,92,93,94,95,96,35,36,45,47,48,49,50,86,121,130,], title: "create_typical_building_from_model", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 
  { id: 69, parents: [39,40], title: "set_electric_equipment_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
  { id: 70, parents: [33,86,90,97,131], title: "set_exterior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 71, parents: [127], title: "set_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 72, parents: [86,98,132], title: "set_hvac_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 73, parents: [86,92,99], title: "set_interior_equipment_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 74, parents: [27,28], title: "set_interior_lighting_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 75, parents: [86,100], title: "set_interior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 76, parents: [86,93,101], title: "set_roof_template", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
  { id: 77, parents: [45], title: "set_service_water_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 78, parents: [86,94,102], title: "set_service_water_heating_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 79, parents: [62], title: "set_space_type_load_subcategories", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 80, parents: [86,95,103], title: "set_wall_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 81, parents: [86,96], title: "set_window_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 82, parents: [62], title: "simulation_settings", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
    ]
  };
  
  
  var famdata = {
    cursorItem: 5,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 5,
        toItem: 81,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      },
      {
        annotationType: primitives.AnnotationType.Background,
        items: [81, 82, 83, 84, 85],
        borderColor: "#f8e5f9",
        fillColor: "#e5f9f8",
        lineWidth: 2,
        selectItems: true,
        lineType: primitives.LineType.Dotted
      },
      {
        annotationType: primitives.AnnotationType.Shape,
        items: [5],
        label: "<span class=\"badge bg-danger\">3</span> Cross Out shape annotation",
        labelSize: { width: 120, height: 50 }, //new primitives.Size(120, 50)
        shapeType: primitives.ShapeType.CrossOut,
        borderColor: primitives.Colors.Red,
        offset: { left: 6, top: 3, right: 6, bottom: 6 }, //new primitives.Thickness(6, 3, 6, 6)
        lineWidth: 2,
        selectItems: false,
        lineType: primitives.LineType.Dashed
      },
      {
        annotationType: primitives.AnnotationType.Shape,
        items: [81],
        label: "<span class=\"badge bg-danger\">4</span> Oval shape annotation",
        labelSize: new primitives.Size(100, 50), //new primitives.Size(100, 50)
        shapeType: primitives.ShapeType.Oval,
        borderColor: primitives.Colors.Red,
        offset: 14,
        lineWidth: 2,
        selectItems: true,
        lineType: primitives.LineType.Dashed,
        fillColor: null
      }
    ],
    items: [
      { id: 3, title: "James Holt 2", label: "James Holt", description: "3, Sr. VP, Server & Tools Division", phone: "262-215-7998", email: "jameholt@name.com", image: "../images/photos/e.png", itemTitleColor: "#4b0082" },
      { id: 4, title: "Thomas Williams 2", label: "Thomas Williams", description: "4, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", image: "../images/photos/r.png", itemTitleColor: "#4b0082" },
      { id: 5, title: "David Kirby 2", label: "David Kirby", description: "5, AGM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", image: "../images/photos/t.png", itemTitleColor: "#4b0082" },
      { id: 6, title: "Lynette Maloney 2", label: "Lynette Maloney", description: "6, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", image: "../images/photos/y.png", itemTitleColor: "#4b0082" },
      { id: 7, parents: [1, 2], title: "Glen Zeigler", label: "Glen Zeigler", description: "7, GM, Core Infrastructure Solutions", phone: "920-665-7222", email: "glenzeig@name.com", image: "../images/photos/u.png", itemTitleColor: "#4b0082" },
      { id: 8, title: "Ione Gallegos", label: "Ione Gallegos", description: "8, GM, Patterns & Practices", phone: "478-322-5539", email: "ionegall@name.com", image: "../images/photos/i.png", itemTitleColor: "#4b0082" },
      { id: 10, parents: [3, 4], title: "Heather Simmons", label: "Heather Simmons", description: "10, GM, Name Learning", phone: "620-368-3620", email: "heatsimm@name.com", image: "../images/photos/p.png", itemTitleColor: "#4b0082" },
      { id: 11, parents: [3, 4], title: "Steven Lacombe", label: "Steven Lacombe", description: "11, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", image: "../images/photos/a.png", itemTitleColor: "#4b0082" },
      { id: 12, parents: [5, 6], title: "Nancy Smith", label: "Nancy Smith", description: "12, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", image: "../images/photos/s.png", itemTitleColor: "#4b0082" },
      { id: 13, parents: [5, 6], title: "Jean Kendall", label: "Jean Kendall", description: "13, GM, DML Server Marketing", phone: "949-453-0415", email: "jeankend@name.com", image: "../images/photos/d.png", itemTitleColor: "#4b0082" },
      { id: 14, parents: [5, 6], title: "Brad Whitt", label: "Brad Whitt", description: "14, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", image: "../images/photos/f.png", itemTitleColor: "#4b0082" },
      { id: 15, parents: [5, 6], title: "Sara Kemp", label: "Sara Kemp", description: "15, VP, Software & Enterprise Management Division", phone: "918-257-4218", email: "sarakemp@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
      { id: 16, title: "Brian Cruz", label: "Brian Cruz", description: "16, GM, Systems Management Server", phone: "320-833-9024", email: "briacruz@name.com", image: "../images/photos/h.png", itemTitleColor: "#4b0082" },
      { id: 17, title: "John Drake", label: "John Drake", description: "17, GM, Software Management", phone: "469-644-8543", email: "johndrak@name.com", image: "../images/photos/j.png", itemTitleColor: "#4b0082" },
      { id: 18, parents: [8, 13], title: "Patrick Perry", label: "Patrick Perry", description: "18, GM, Storage Platforms & Solutions", phone: "781-515-5949", email: "patrperr@name.com", image: "../images/photos/k.png", itemTitleColor: "#4b0082" },
      { id: 180, parents: [18], title: "Patrick Perry Jr.", label: "Patrick Perry Jr.", description: "180, GM, Storage Platforms & Solutions", phone: "781-515-5949", email: "patrperr@name.com", image: "../images/photos/k.png", itemTitleColor: "#4b0082" },
      { id: 19, parents: [8, 13], title: "Mary Spencer", label: "Mary Spencer", description: "19, GM, Manageability and Deployment", phone: "605-892-8662", email: "maryspen@name.com", image: "../images/photos/l.png", itemTitleColor: "#4b0082" },
      { id: 20, parents: [8, 13], title: "Thomas Dixon", label: "Thomas Dixon", description: "20, GM, Operations Manager", phone: "651-249-4047", email: "thomdixo@name.com", image: "../images/photos/z.png", itemTitleColor: "#4b0082" },
      { id: 21, parents: [7, 12], title: "George Duong", label: "George Duong", description: "21, Sr. VP, Software Server System", phone: "434-406-2189", email: "georduon@name.com", image: "../images/photos/x.png", itemTitleColor: "#4b0082" },
      { id: 22, parents: [11, 14], title: "Ralph Mercer", label: "Ralph Mercer", description: "22, GM, DML Server Strategy", phone: "814-327-5895", email: "ralpmerc@name.com", image: "../images/photos/c.png", itemTitleColor: "#4b0082" },
      { id: 23, parents: [11, 14], title: "Howard Williams", label: "Howard Williams", description: "23, GM, User Experience", phone: "703-740-8612", email: "howawill@name.com", image: "../images/photos/v.png", itemTitleColor: "#4b0082" },
      { id: 24, parents: [11, 14], title: "Nathalie Escobedo", label: "Nathalie Escobedo", description: "24, GM, DML Server Business Intelligence", phone: "504-555-8165", email: "nathesco@name.com", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 25, parents: [15, 16, 72, 90, 92, 94], title: "Ashley Rue", label: "Ashley Rue", description: "25, VP, Developer Division", phone: "515-324-4969", email: "ashlrue@name.com", image: "../images/photos/n.png", itemTitleColor: "#4b0082" },
      { id: 26, parents: [15, 16], title: "Joan Whitham", label: "Joan Whitham", description: "26, VP, .ORG Developer Platform Team", phone: "914-614-5020", email: "joanwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 27, parents: [15, 16], title: "Janella Cannon", label: "Janella Cannon", description: "27, GM, Web and UI Development Platform", phone: "484-870-9064", email: "janecann@name.com", image: "../images/photos/q.png", itemTitleColor: "#4b0082" },
      { id: 28, parents: [15, 16], title: "Roger Greenlee", label: "Roger Greenlee", description: "28, GM, Visual Studio", phone: "847-510-2148", email: "rogegree@name.com", image: "../images/photos/w.png", itemTitleColor: "#4b0082" },
      { id: 29, title: "Edna Garner", label: "Edna Garner", description: "29, GM, Office System and Applications Developer Tools", phone: "620-873-1915", email: "ednagarn@name.com", image: "../images/photos/e.png", itemTitleColor: "#4b0082" },
      { id: 30, parents: [17, 22], title: "Brent Holston", label: "Brent Holston", description: "30, GM, Visual Studio Team System", phone: "925-386-2127", email: "brenhols@name.com", image: "../images/photos/r.png", itemTitleColor: "#4b0082" },
      { id: 31, parents: [17, 22], title: "Mary Russ", label: "Mary Russ", description: "31, GM, Visual Studio Language and Data Tools", phone: "443-271-9086", email: "maryruss@name.com", image: "../images/photos/t.png", itemTitleColor: "#4b0082" },
      { id: 32, parents: [17, 22], title: "Stanley Weathers", label: "Stanley Weathers", description: "32, Managing Dir., India Development Center", phone: "734-482-1633", email: "stanweat@name.com", image: "../images/photos/y.png", itemTitleColor: "#4b0082" },
      { id: 33, parents: [18, 21], title: "Melvin White", label: "Melvin White", description: "33, GM, Real Time Collaboration & Home Entertainment Products", phone: "785-631-8548", email: "melvwhit@name.com", image: "../images/photos/u.png", itemTitleColor: "#4b0082" },
      { id: 34, parents: [23, 28], title: "Bonnie Wedel", label: "Bonnie Wedel", description: "34, VP, Enterprise Access and Security Products Division (EASP)", phone: "412-265-2782", email: "bonnwede@name.com", image: "../images/photos/i.png", itemTitleColor: "#4b0082" },
      { id: 35, parents: [23, 28], title: "Norman Dalton", label: "Norman Dalton", description: "35, GM, Haifa R&D Center", phone: "316-334-6273", email: "normdalt@name.com", image: "../images/photos/o.png", itemTitleColor: "#4b0082" },
      { id: 36, parents: [23, 28], title: "Melissa Houser", label: "Melissa Houser", description: "36, GM, Core File Solutions", phone: "630-887-1188", email: "melihous@name.com", image: "../images/photos/p.png", itemTitleColor: "#4b0082" },
      { id: 37, parents: [23, 28], title: "Abbie Lawson", label: "Abbie Lawson", description: "37, GM, Software Server Solutions Group", phone: "530-322-6413", email: "abbilaws@name.com", image: "../images/photos/a.png", itemTitleColor: "#4b0082" },
      { id: 38, parents: [27, 29], title: "Ernest Putnam", label: "Ernest Putnam", description: "38, GM, Connected Systems Division", phone: "626-831-0555", email: "erneputn@name.com", image: "../images/photos/s.png", itemTitleColor: "#4b0082" },
      { id: 39, parents: [27, 29], title: "Robert Lemieux", label: "Robert Lemieux", description: "39, GM, Connected Framework", phone: "662-787-2600", email: "robelemi@name.com", image: "../images/photos/d.png", itemTitleColor: "#4b0082" },
      { id: 40, parents: [27, 29], title: "Arthur Wood", label: "Arthur Wood", description: "40, GM, XML Enterprise Services", phone: "630-677-5265", email: "arthwood@name.com", image: "../images/photos/f.png", itemTitleColor: "#4b0082" },
      { id: 390, parents: [27, 29], title: "Jonathan Hitt 2", label: "Jonathan Hitt 2", description: "390, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
      { id: 400, parents: [27, 29], title: "Celestina Crum 2", label: "Celestina Crum 2", description: "400, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", image: "../images/photos/h.png", itemTitleColor: "#4b0082" },
      { id: 41, title: "Jonathan Hitt", label: "Jonathan Hitt", description: "41, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
      { id: 42, parents: [65], title: "Celestina Crum", label: "Celestina Crum", description: "42, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", image: "../images/photos/h.png", itemTitleColor: "#4b0082" },
      { id: 43, parents: [30, 33], title: "Cindy Turner", label: "Cindy Turner", description: "43, GM, Pricing", phone: "530-934-4295", email: "cindturn@name.com", image: "../images/photos/j.png", itemTitleColor: "#4b0082" },
      { id: 44, parents: [30, 33], title: "Victoria Sequeira", label: "Victoria Sequeira", description: "44, GM, Worldwide Licensing", phone: "973-883-9137", email: "victsequ@name.com", image: "../images/photos/k.png", itemTitleColor: "#4b0082" },
      { id: 45, parents: [30, 33], title: "James Workman", label: "James Workman", description: "45, GM, Name Financing", phone: "713-624-6200", email: "jamework@name.com", image: "../images/photos/l.png", itemTitleColor: "#4b0082" },
      { id: 46, parents: [32, 40], title: "Gil Adams", label: "Gil Adams", description: "46, GM, WW Licensing Programs", phone: "313-630-8717", email: "giladam@name.com", image: "../images/photos/z.png", itemTitleColor: "#4b0082" },
      { id: 47, parents: [32, 40], title: "Norma Moore", label: "Norma Moore", description: "47, GM, WW Licensing Solutions", phone: "334-496-5203", email: "normmoor@name.com", image: "../images/photos/x.png", itemTitleColor: "#4b0082" },
      { id: 48, parents: [35, 36], title: "Carlos Cardenas", label: "Carlos Cardenas", description: "48, GM, Marketing and Readiness", phone: "775-999-3630", email: "carlcard@name.com", image: "../images/photos/c.png", itemTitleColor: "#4b0082" },
      { id: 49, parents: [37, 39], title: "John Green", label: "John Green", description: "49, Sr. VP, Software Core Operating System Division", phone: "937-475-8106", email: "johngree@name.com", image: "../images/photos/v.png", itemTitleColor: "#4b0082" },
      { id: 50, parents: [37, 39], title: "Richard Morales", label: "Richard Morales", description: "50, VP, Core OS Development", phone: "650-729-6483", email: "richmora@name.com", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 51, parents: [37, 39], title: "Carolyn Jones", label: "Carolyn Jones", description: "51, VP, Software Architecture and Kernel", phone: "903-859-0477", email: "carojone@name.com", image: "../images/photos/n.png", itemTitleColor: "#4b0082" },
      { id: 52, parents: [41, 42], title: "Charlotte White", label: "Charlotte White", description: "52, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 53, parents: [41, 42, 60], title: "Elizabeth Zito", label: "Elizabeth Zito", description: "53, GM, Software Device Experience Group", phone: "307-201-4036", email: "elizzito@name.com", image: "../images/photos/q.png", itemTitleColor: "#4b0082" },
      { id: 54, parents: [41, 42], title: "Edna Cavazos", label: "Edna Cavazos", description: "54, GM, Software Device Experience", phone: "337-977-6357", email: "ednacava@name.com", image: "../images/photos/w.png", itemTitleColor: "#4b0082" },
      { id: 55, parents: [44, 48], title: "Debra Mayers", label: "Debra Mayers", description: "55, GM, Core Networking and Collaboration", phone: "334-538-2338", email: "debrmaye@name.com", image: "../images/photos/e.png", itemTitleColor: "#4b0082" },
      { id: 56, parents: [44, 48], title: "Gerald Castonguay", label: "Gerald Castonguay", description: "56, GM, Cableless & Mobility", phone: "706-541-8969", email: "geracast@name.com", image: "../images/photos/r.png", itemTitleColor: "#4b0082" },
      { id: 57, parents: [47, 49], title: "Kevin Carico", label: "Kevin Carico", description: "57, GM, Network Infrastructure Servers", phone: "530-452-7085", email: "kevicari@name.com", image: "../images/photos/t.png", itemTitleColor: "#4b0082" },
      { id: 58, parents: [50, 53], title: "Robert Morgan", label: "Robert Morgan", description: "58, VP, Security Technology Unit (STU)", phone: "308-532-6548", email: "robemorg@name.com", image: "../images/photos/y.png", itemTitleColor: "#4b0082" },
      { id: 59, parents: [50, 53], title: "Susan Haines", label: "Susan Haines", description: "59, VP", phone: "937-738-0077", email: "susahain@name.com", image: "../images/photos/u.png", itemTitleColor: "#4b0082" },
      { id: 60, title: "Susan Zito", label: "Susan Zito", description: "60, VP", phone: "937-738-0077", email: "susahain@name.com", image: "../images/photos/u.png", itemTitleColor: "#4b0082" },
  
      { id: 61, parents: [65], title: "Jonathan Hitt", label: "Jonathan Hitt", description: "61, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
      { id: 62, parents: [66], title: "Celestina Crum", label: "Celestina Crum", description: "62, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", image: "../images/photos/h.png", itemTitleColor: "#4b0082" },
      { id: 63, parents: [61, 62], title: "Carolyn Jones", label: "Carolyn Jones", description: "63, VP, Software Architecture and Kernel", phone: "903-859-0477", email: "carojone@name.com", image: "../images/photos/n.png", itemTitleColor: "#4b0082" },
      { id: 64, parents: [61, 62], title: "Charlotte White", label: "Charlotte White", description: "64, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 65, title: "Natalia Kudinova", label: "Natalia Kudinova", description: "65, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
  
      { id: 66, title: "Natalia Kudinova", label: "Natalia Kudinova", description: "66, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
      { id: 67, parents: [66], title: "Jonathan Hitt", label: "Jonathan Hitt", description: "67, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
      { id: 68, title: "Celestina Crum", label: "Celestina Crum", description: "68, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", image: "../images/photos/h.png", itemTitleColor: "#4b0082" },
      { id: 69, parents: [67, 68], title: "Carolyn Jones", label: "Carolyn Jones", description: "69, VP, Software Architecture and Kernel", phone: "903-859-0477", email: "carojone@name.com", image: "../images/photos/n.png", itemTitleColor: "#4b0082" },
      { id: 70, parents: [67, 68], title: "Charlotte White", label: "Charlotte White", description: "70, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 71, parents: [67, 68], title: "Charlotte White", label: "Charlotte White", description: "71, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
  
      { id: 73, parents: [38, 390, 400], title: "Test Node 1", label: "Test Node 1", description: "73, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 74, parents: [38, 390, 400], title: "Test Node 2", label: "Test Node 2", description: "74, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 75, parents: [38, 390, 400], title: "Test Node 3", label: "Test Node 3", description: "75, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 76, parents: [38, 390, 400], title: "Test Node 4", label: "Test Node 4", description: "76, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 77, parents: [19, 20], title: "Test Node 5", label: "Test Node 5", description: "77, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 78, parents: [19, 20], title: "Test Node 6", label: "Test Node 6", description: "78, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
  
      { id: 81, parents: [3], title: "Ext Node 81", label: "Ext Node 81", description: "81, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 82, parents: [81], title: "Ext Node 82", label: "Ext Node 82", description: "82, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 85, parents: [81, 3], title: "Ext Node 85", label: "Ext Node 85", description: "85, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 83, parents: [82, 3], title: "Ext Node 83", label: "Ext Node 83", description: "83, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
      { id: 84, parents: [82, 3], title: "Ext Node 84", label: "Ext Node 84", description: "84, VP, Software Networking & Device Technologies", phone: "248-402-6142", email: "charwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
  
      { id: 103, title: "James Holt", label: "James Holt", description: "103, Sr. VP, Server & Tools Division", phone: "262-215-7998", email: "jameholt@name.com", image: "../images/photos/e.png", itemTitleColor: "#4b0082" },
      { id: 104, title: "Thomas Williams", label: "Thomas Williams", description: "104, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", image: "../images/photos/r.png", itemTitleColor: "#4b0082" },
      { id: 105, title: "David Kirby", label: "David Kirby", description: "105, GM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", image: "../images/photos/t.png", itemTitleColor: "#4b0082" },
      { id: 106, title: "Lynette Maloney", label: "Lynette Maloney", description: "106, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", image: "../images/photos/y.png", itemTitleColor: "#4b0082" },
  
      { id: 109, title: "Jose Clark", label: "Jose Clark", description: "109, GM, TechNet and MSDN", phone: "401-218-3019", email: "joseclar@name.com", image: "../images/photos/o.png", itemTitleColor: "#4b0082" },
  
      { id: 112, parents: [103, 104, 3], title: "Nancy Smith", label: "Nancy Smith", description: "112, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", image: "../images/photos/s.png", itemTitleColor: "#4b0082" },
      { id: 113, parents: [103, 104], title: "Jean Kendall", label: "Jean Kendall", description: "113, GM, DML Server Marketing", phone: "949-453-0415", email: "jeankend@name.com", image: "../images/photos/d.png", itemTitleColor: "#4b0082" },
      { id: 114, parents: [103, 104], title: "Brad Whitt", label: "Brad Whitt", description: "114, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", image: "../images/photos/f.png", itemTitleColor: "#4b0082" },
  
      { id: 115, parents: [105, 106], title: "Sara Kemp", label: "Sara Kemp", description: "115, VP, Software & Enterprise Management Division", phone: "918-257-4218", email: "sarakemp@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
      { id: 116, parents: [105, 106], title: "Brian Cruz", label: "Brian Cruz", description: "116, GM, Systems Management Server", phone: "320-833-9024", email: "briacruz@name.com", image: "../images/photos/h.png", itemTitleColor: "#4b0082" },
      { id: 117, parents: [105, 106], title: "John Drake", label: "John Drake", description: "117, GM, Software Management", phone: "469-644-8543", email: "johndrak@name.com", image: "../images/photos/j.png", itemTitleColor: "#4b0082" },
  
      { id: 118, title: "Patrick Perry", label: "Patrick Perry", description: "118, GM, Storage Platforms & Solutions", phone: "781-515-5949", email: "patrperr@name.com", image: "../images/photos/k.png", itemTitleColor: "#4b0082" },
  
      { id: 119, parents: [109, 112], title: "Mary Spencer", label: "Mary Spencer", description: "119, GM, Manageability and Deployment", phone: "605-892-8662", email: "maryspen@name.com", image: "../images/photos/l.png", itemTitleColor: "#4b0082" },
      { id: 120, parents: [109, 112], title: "Thomas Dixon", label: "Thomas Dixon", description: "120, GM, Operations Manager", phone: "651-249-4047", email: "thomdixo@name.com", image: "../images/photos/z.png", itemTitleColor: "#4b0082" },
  
      { id: 121, parents: [114], title: "George Duong", label: "George Duong", description: "121, Sr. VP, Software Server System", phone: "434-406-2189", email: "georduon@name.com", image: "../images/photos/x.png", itemTitleColor: "#4b0082" },
      { id: 122, parents: [114], title: "Ralph Mercer", label: "Ralph Mercer", description: "122, GM, DML Server Strategy", phone: "814-327-5895", email: "ralpmerc@name.com", image: "../images/photos/c.png", itemTitleColor: "#4b0082" },
  
      { id: 123, parents: [116], title: "Howard Williams", label: "Howard Williams", description: "123, GM, User Experience", phone: "703-740-8612", email: "howawill@name.com", image: "../images/photos/v.png", itemTitleColor: "#4b0082" },
  
      { id: 124, parents: [117, 118], title: "Nathalie Escobedo", label: "Nathalie Escobedo", description: "124, GM, DML Server Business Intelligence", phone: "504-555-8165", email: "nathesco@name.com", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
  
      { id: 125, title: "Ashley Rue", label: "Ashley Rue", description: "125, VP, Developer Division", phone: "515-324-4969", email: "ashlrue@name.com", image: "../images/photos/n.png", itemTitleColor: "#4b0082" },
      { id: 126, title: "Joan Whitham", label: "Joan Whitham", description: "126, VP, .ORG Developer Platform Team", phone: "914-614-5020", email: "joanwhit@name.com", image: "../images/photos/m.png", itemTitleColor: "#4b0082" },
  
      { id: 127, parents: [120], title: "Edna Garner", label: "Edna Garner", description: "127, GM, Office System and Applications Developer Tools", phone: "620-873-1915", email: "ednagarn@name.com", image: "../images/photos/e.png", itemTitleColor: "#4b0082" },
      { id: 128, title: "Roger Greenlee", label: "Roger Greenlee", description: "128, GM, Visual Studio", phone: "847-510-2148", email: "rogegree@name.com", image: "../images/photos/w.png", itemTitleColor: "#4b0082" },
      { id: 129, title: "Janella Cannon", label: "Janella Cannon", description: "129, GM, Web and UI Development Platform", phone: "484-870-9064", email: "janecann@name.com", image: "../images/photos/q.png", itemTitleColor: "#4b0082" },
  
      { id: 130, parents: [129, 128, 149], title: "Natalia Kudinova", label: "Natalia Kudinova", description: "130, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
      { id: 131, parents: [130, 132], title: "Mary Russ", label: "Mary Russ", description: "131, GM, Visual Studio Language and Data Tools", phone: "443-271-9086", email: "maryruss@name.com", image: "../images/photos/t.png", itemTitleColor: "#4b0082" },
      { id: 132, parents: [127], title: "Stanley Weathers", label: "Stanley Weathers", description: "132, Managing Dir., India Development Center", phone: "734-482-1633", email: "stanweat@name.com", image: "../images/photos/y.png", itemTitleColor: "#4b0082" },
      { id: 133, parents: [127], title: "Melvin White", label: "Melvin White", description: "133, GM, Real Time Collaboration & Home Entertainment Products", phone: "785-631-8548", email: "melvwhit@name.com", image: "../images/photos/u.png", itemTitleColor: "#4b0082" },
      { id: 134, parents: [133, 135, 43], title: "Bonnie Wedel", label: "Bonnie Wedel", description: "134, VP, Enterprise Access and Security Products Division (EASP)", phone: "412-265-2782", email: "bonnwede@name.com", image: "../images/photos/i.png", itemTitleColor: "#4b0082" },
      { id: 135, parents: [136, 137], title: "Norman Dalton", label: "Norman Dalton", description: "135, GM, Haifa R&D Center", phone: "316-334-6273", email: "normdalt@name.com", image: "../images/photos/o.png", itemTitleColor: "#4b0082" },
      { id: 136, parents: [120], isActive: false, title: "Brent Holston", label: "Brent Holston", description: "136, GM, Visual Studio Team System", phone: "925-386-2127", email: "brenhols@name.com", image: "../images/photos/r.png", itemTitleColor: "#4b0082" },
      { id: 137, title: "Abbie Lawson", label: "Abbie Lawson", description: "137, GM, Software Server Solutions Group", phone: "530-322-6413", email: "abbilaws@name.com", image: "../images/photos/a.png", itemTitleColor: "#4b0082" },
  
      { id: 138, parents: [122], title: "Ernest Putnam", label: "Ernest Putnam", description: "138, GM, Connected Systems Division", phone: "626-831-0555", email: "erneputn@name.com", image: "../images/photos/s.png", itemTitleColor: "#4b0082" },
      { id: 139, parents: [122, 123], title: "Robert Lemieux", label: "Robert Lemieux", description: "139, GM, Connected Framework", phone: "662-787-2600", email: "robelemi@name.com", image: "../images/photos/d.png", itemTitleColor: "#4b0082" },
  
      { id: 140, parents: [139], title: "Arthur Wood", label: "Arthur Wood", description: "140, GM, XML Enterprise Services", phone: "630-677-5265", email: "arthwood@name.com", image: "../images/photos/f.png", itemTitleColor: "#4b0082" },
      { id: 141, parents: [139], title: "Jonathan Hitt", label: "Jonathan Hitt", description: "141, GM, BizTalk Server", phone: "443-591-0659", email: "jonahitt@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
  
      { id: 142, parents: [124], title: "Celestina Crum", label: "Celestina Crum", description: "142, CFO, Platforms Products & Services", phone: "419-578-6479", email: "celecrum@name.com", image: "../images/photos/h.png", itemTitleColor: "#4b0082" },
      { id: 143, parents: [124], title: "Cindy Turner", label: "Cindy Turner", description: "143, GM, Pricing", phone: "530-934-4295", email: "cindturn@name.com", image: "../images/photos/j.png", itemTitleColor: "#4b0082" },
      { id: 144, parents: [124], title: "Victoria Sequeira", label: "Victoria Sequeira", description: "144, GM, Worldwide Licensing", phone: "973-883-9137", email: "victsequ@name.com", image: "../images/photos/k.png", itemTitleColor: "#4b0082" },
  
      { id: 145, parents: [144], title: "James Workman", label: "James Workman", description: "145, GM, Name Financing", phone: "713-624-6200", email: "jamework@name.com", image: "../images/photos/l.png", itemTitleColor: "#4b0082" },
      { id: 146, parents: [144], title: "Gil Adams", label: "Gil Adams", description: "146, GM, WW Licensing Programs", phone: "313-630-8717", email: "giladam@name.com", image: "../images/photos/z.png", itemTitleColor: "#4b0082" },
  
      { id: 147, parents: [149, 128, 129], title: "Norma Moore", label: "Norma Moore", description: "147, GM, WW Licensing Solutions", phone: "334-496-5203", email: "normmoor@name.com", image: "../images/photos/x.png", itemTitleColor: "#4b0082" },
      { id: 148, parents: [146, 147], title: "Carlos Cardenas", label: "Carlos Cardenas", description: "48, GM, Marketing and Readiness", phone: "775-999-3630", email: "carlcard@name.com", image: "../images/photos/c.png", itemTitleColor: "#4b0082" },
  
      { id: 149, parents: [125, 126], title: "John Green", label: "John Green", description: "149, Sr. VP, Software Core Operating System Division", phone: "937-475-8106", email: "johngree@name.com", image: "../images/photos/v.png", itemTitleColor: "#4b0082" }
    ]
  };
  
  var famdata2 = {
    cursorItem: 5,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 1,
        toItem: 15,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
      { id: 1, title: "David Dalton", label: "David Dalton", description: "1, Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", image: "../images/photos/q.png", itemTitleColor: "#4169e1" },
      { id: 2, title: "Jeanna White", label: "Jeanna White", description: "2, Co-Presidents, Platform Products & Services Division", phone: "505-791-1689", email: "jeanwhit@name.com", image: "../images/photos/w.png", itemTitleColor: "#4b0082" },
      { id: 4, title: "Thomas Williams", label: "Thomas Williams", description: "4, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", image: "../images/photos/r.png", itemTitleColor: "#4b0082" },
      { id: 5, title: "David Kirby", label: "David Kirby", description: "5, GM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", image: "../images/photos/t.png", itemTitleColor: "#4b0082" },
      { id: 6, title: "Lynette Maloney", label: "Lynette Maloney", description: "6, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", image: "../images/photos/y.png", itemTitleColor: "#4b0082" },
  
      { id: 11, title: "Steven Lacombe", label: "Steven Lacombe", description: "11, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", image: "../images/photos/a.png", itemTitleColor: "#4b0082", parents: [1, 2] },
      { id: 12, title: "Nancy Smith", label: "Nancy Smith", description: "12, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", image: "../images/photos/s.png", itemTitleColor: "#4b0082", parents: [1, 2] },
  
      { id: 13, title: "Jean Kendall", label: "Jean Kendall", description: "13, GM, DML Server Marketing", phone: "949-453-0415", email: "jeankend@name.com", image: "../images/photos/d.png", itemTitleColor: "#4b0082", parents: [4, 5] },
      { id: 14, title: "Brad Whitt", label: "Brad Whitt", description: "14, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", image: "../images/photos/f.png", itemTitleColor: "#4b0082", parents: [4, 5] },
  
      { id: 15, title: "Sara Kemp", label: "Sara Kemp", description: "15, VP, Software & Enterprise Management Division", phone: "918-257-4218", email: "sarakemp@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082", parents: [5, 6] },
      { id: 16, title: "Brian Cruz", label: "Brian Cruz", description: "16, GM, Systems Management Server", phone: "320-833-9024", email: "briacruz@name.com", image: "../images/photos/h.png", itemTitleColor: "#4b0082", parents: [5, 6] },
      { id: 17, title: "John Drake", label: "John Drake", description: "17, GM, Software Management", phone: "469-644-8543", email: "johndrak@name.com", image: "../images/photos/j.png", itemTitleColor: "#4b0082", parents: [5, 6] },
  
      { id: 18, title: "Thomas Dixon", label: "Thomas Dixon", description: "18, GM, Operations Manager", phone: "651-249-4047", email: "thomdixo@name.com", image: "../images/photos/z.png", itemTitleColor: "#4b0082", parents: [11, 13] },
      { id: 19, title: "George Duong", label: "George Duong", description: "19, Sr. VP, Software Server System", phone: "434-406-2189", email: "georduon@name.com", image: "../images/photos/x.png", itemTitleColor: "#4b0082", parents: [11, 13] },
  
      { id: 20, title: "Ralph Mercer", label: "Ralph Mercer", description: "20, GM, DML Server Strategy", phone: "814-327-5895", email: "ralpmerc@name.com", image: "../images/photos/c.png", itemTitleColor: "#4b0082", parents: [12, 15] },
      { id: 21, title: "Howard Williams", label: "Howard Williams", description: "21, GM, User Experience", phone: "703-740-8612", email: "howawill@name.com", image: "../images/photos/v.png", itemTitleColor: "#4b0082", parents: [12, 15] },
  
      { id: 22, title: "Nathalie Escobedo", label: "Nathalie Escobedo", description: "22, GM, DML Server Business Intelligence", phone: "504-555-8165", email: "nathesco@name.com", image: "../images/photos/b.png", itemTitleColor: "#4b0082", parents: [14, 17] },
      { id: 23, title: "Ashley Rue", label: "Ashley Rue", description: "23, VP, Developer Division", phone: "515-324-4969", email: "ashlrue@name.com", image: "../images/photos/n.png", itemTitleColor: "#4b0082", parents: [14, 17] }
    ]
  };
  
  var sideBySide = {
    cursorItem: 5,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 36,
        toItem: 16,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
       //TSVS
  { id: 2, parents: [], title: "unknown", itemTitleColor: "#ddd", groupTitle: "tsv" },

  { id: 3, parents: [], title: "climate_zone", itemTitleColor: "#ddd", groupTitle: "tsv" },
  { id: 150, parents: [], title: "simulation_year", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 151, parents: [], title: "rotation", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 4, parents: [3], title: "county_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 5, parents: [4], title: "building_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 6, parents: [4], title: "state_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 7, parents: [5], title: "hvac_tst_htg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 8, parents: [5], title: "hvac_tst_clg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 9, parents: [5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 170, parents: [9,5], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 171, parents: [9,5], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 10, parents: [5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 172, parents: [10,5], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 173, parents: [10,5], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 11, parents: [3,5], title: "number_stories", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 12, parents: [3,5], title: "year_built", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 174, parents: [12], title: "year_bin_of_original_building_construction", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 175, parents: [12,150], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 176, parents: [12,150], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 177, parents: [12,150], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 178, parents: [12,150], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 179, parents: [12,150], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 180, parents: [12,150], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 181, parents: [12,150], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 182, parents: [12,150], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 13, parents: [3,5], title: "rentable_area", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 15, parents: [5,23], title: "hvac_system_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 16, parents: [5], title: "service_water_heating_fuel", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right,},

  { id: 17, parents: [5], title: "weekday_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 18, parents: [17], title: "weekday_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 19, parents: [5], title: "weekend_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 20, parents: [19], title: "weekend_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 21, parents: [5], title: "hvac_tst_htg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 22, parents: [5], title: "hvac_tst_clg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 25, parents: [5], title: "hvac_night_variability", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  
  { id: 23, parents: [6], title: "region", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 156, parents: [6], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 157, parents: [6], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 158, parents: [6], title: "energy_code_compliance_hvac", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 159, parents: [6], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 160, parents: [6], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 161, parents: [6], title: "energy_code_compliance_roof", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 162, parents: [6], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 163, parents: [6], title: "energy_code_compliance_walls", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 164, parents: [6], title: "energy_code_compliance_windows", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 152, parents: [155], title: "building_subtype", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 153, parents: [155], title: "building_shape", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 154, parents: [153], title: "aspect_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 155, parents: [], title: "", itemTitleColor: "#ddd", groupTitle: "", placementType: primitives.AdviserPlacementType.Right},


 { id: 190, parents: [174], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 191, parents: [175,157], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 192, parents: [176,158], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 193, parents: [177,159], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 194, parents: [178,160], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 195, parents: [179,161], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 196, parents: [180,162], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 197, parents: [181,163], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 198, parents: [182,164], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


 { id: 200, parents: [190,156], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 202, parents: [191,157], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 203, parents: [192,158], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 204, parents: [193,159], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 205, parents: [194,160], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 206, parents: [195,161], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 207, parents: [196,162], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 208, parents: [197,163], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 209, parents: [198,164], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 201, parents: [174,5,13], title: "window_wall_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 //   bldg stock
 
  { id: 27, parents: [10], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right, position: 2 },
  { id: 28, parents: [172], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 120, parents: [173], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 24, parents: [156], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 110, parents: [157], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 111, parents: [158], title: "energy_code_compliance_hvac", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 112, parents: [159], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 113, parents: [160], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 114, parents: [161], title: "energy_code_compliance_roof", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 115, parents: [162], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 116, parents: [163], title: "energy_code_compliance_walls", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 117, parents: [164], title: "energy_code_compliance_windows", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 130, parents: [200], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 32, parents: [190], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 140, parents: [191], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 141, parents: [192], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 142, parents: [193], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 143, parents: [194], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 144, parents: [195], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 145, parents: [196], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 146, parents: [197], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 147, parents: [198], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 33, parents: [202], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 90, parents: [203], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 91, parents: [204], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 92, parents: [205], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 93, parents: [206], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 94, parents: [207], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 95, parents: [208], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 96, parents: [209], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 83, parents: [154], title: "aspect_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 84, parents: [153], title: "building_shape", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv",  placementType: primitives.AdviserPlacementType.Right},
 { id: 85, parents: [5], title: "building_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 88, parents: [152], title: "building_subtype", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 86, parents: [3], title: "climate_zone", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 87, parents: [4], title: "county_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 36, parents: [11], title: "number_stories", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 36, parents: [2], title: "ownership_status", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 37, parents: [2], title: "party_responsible_for_operation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 38, parents: [9], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 39, parents: [170], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 40, parents: [171], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 127, parents: [121], title: "heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 121, parents: [15], title: "hvac_system_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 122, parents: [21], title: "hvac_tst_clg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 123, parents: [22], title: "hvac_tst_clg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 124, parents: [7], title: "hvac_tst_htg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 125, parents: [21], title: "hvac_tst_htg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 126, parents: [25], title: "hvac_night_variability", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 41, parents: [2], title: "purchase_input_responsibility", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 42, parents: [23], title: "region", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 43, parents: [13], title: "rentable_area", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 44, parents: [151], title: "rotation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 45, parents: [16], title: "service_water_heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 46, parents: [6], title: "state_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 47, parents: [18], title: "weekday_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 48, parents: [17], title: "weekday_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 49, parents: [20], title: "weekend_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 50, parents: [19], title: "weekend_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 51, parents: [32,43], title: "window_wall_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 60, parents: [174], title: "year_bin_of_original_building_construction", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 52, parents: [175], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 53, parents: [176], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 54, parents: [177], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 55, parents: [178], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 56, parents: [179], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 57, parents: [180], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 58, parents: [181], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 59, parents: [182], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 61, parents: [12], title: "year_built", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right}, 

 { id: 62, parents: [150], title: "year_of_simulation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 



 //measures subs
 { id: 63, parents: [62], title: "add_blinds_to_selected_windows", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 64, parents: [126], title: "add_hvac_nighttime_operation_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 65, parents: [122,123,124,125], title: "add_thermostat_setpoint_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 66, parents: [62,86,87], title: "ChangeBuildingLocation", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 67, parents: [33,36,43,44,51,90,91,92,93,94,95,96,35,43,44,51,83,85,86,88,130,202], title: "create_bar_from_building_type_ratios", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 68, parents: [33,45,47,48,49,50,90,91,92,93,94,95,96,35,36,45,47,48,49,50,86,121,130,], title: "create_typical_building_from_model", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 69, parents: [39,40], title: "set_electric_equipment_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 70, parents: [33,86,90,97,131], title: "set_exterior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 71, parents: [127], title: "set_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 72, parents: [86,98,132], title: "set_hvac_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 73, parents: [86,92,99], title: "set_interior_equipment_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 74, parents: [27,28], title: "set_interior_lighting_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 75, parents: [86,100], title: "set_interior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 76, parents: [86,93,101], title: "set_roof_template", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 77, parents: [45], title: "set_service_water_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 78, parents: [86,94,102], title: "set_service_water_heating_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 79, parents: [62], title: "set_space_type_load_subcategories", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 80, parents: [86,95,103], title: "set_wall_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 81, parents: [86,96], title: "set_window_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},

 { id: 82, parents: [62], title: "simulation_settings", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
    ]
  };
  
  var crossShape = {
    cursorItem: 2,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 2,
        toItem: 1,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
      { id: 1, title: "1", description: "1", image: "../images/photos/t.png" },
      { id: 2, title: "2", description: "2", image: "../images/photos/t.png" },
      { id: 3, parents: [1, 101, 102, 103], title: "3", description: "3", image: "../images/photos/t.png" },
      { id: 4, parents: [1, 101, 102, 103], title: "4", description: "4", image: "../images/photos/t.png" },
      { id: 5, parents: [1, 101, 102, 103], title: "5", description: "5", image: "../images/photos/t.png" },
      { id: 6, parents: [2], title: "6", description: "6", image: "../images/photos/t.png" },
      { id: 7, parents: [2], title: "7", description: "7", image: "../images/photos/t.png" },
      { id: 8, parents: [2], title: "8", description: "8", image: "../images/photos/t.png" },
      { id: 9, parents: [3], title: "9", description: "9", image: "../images/photos/t.png" },
      { id: 12, parents: [8], title: "12", description: "12", image: "../images/photos/t.png" },
      { id: 10, parents: [4, 6], title: "10", description: "10", image: "../images/photos/t.png" },
      { id: 11, parents: [5, 7], title: "11", description: "11", image: "../images/photos/t.png" }
    ]
  };
  
  var rombusShape = {
    cursorItem: 1,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 3,
        toItem: 8,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
      { id: 1, title: "1", description: "1", image: "../images/photos/t.png" },
      { id: 2, parents: [1, 101, 102, 103], title: "2", description: "2", image: "../images/photos/t.png" },
      { id: 3, parents: [1, 101, 102, 103], title: "3", description: "3", image: "../images/photos/t.png" },
      { id: 4, parents: [2], title: "4", description: "4", image: "../images/photos/t.png" },
      { id: 5, parents: [2], title: "5", description: "5", image: "../images/photos/t.png" },
      { id: 6, parents: [3], title: "6", description: "6", image: "../images/photos/t.png" },
      { id: 7, parents: [3], title: "7", description: "7", image: "../images/photos/t.png" },
      { id: 8, parents: [4, 5], title: "8", description: "8", image: "../images/photos/t.png" },
      { id: 9, parents: [6, 7], title: "9", description: "9", image: "../images/photos/t.png" },
      { id: 10, parents: [8, 9], title: "10", description: "10", image: "../images/photos/t.png" }
    ]
  };
  
  var sandClockShape = {
    cursorItem: 7,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 7,
        toItem: 10,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      },
      new primitives.BackgroundAnnotationConfig({
        items: [7],
        borderColor: "#f8e5f9",
        fillColor: "#e5f9f8",
        lineWidth: 2,
        selectItems: true,
        includeChildren: true,
        lineType: primitives.LineType.Dotted,
        offset: new primitives.Thickness(20, 20, 20, 20)
      })
    ],
    items: [
      { id: 1, title: "1", description: "1", image: "../images/photos/t.png" },
      { id: 2, title: "2", description: "2", image: "../images/photos/t.png" },
      { id: 3, title: "3", description: "3", image: "../images/photos/t.png" },
      { id: 4, title: "4", description: "4", image: "../images/photos/t.png" },
      { id: 5, parents: [1, 2], title: "5", description: "5", image: "../images/photos/t.png" },
      { id: 6, parents: [3, 4], title: "6", description: "6", image: "../images/photos/t.png" },
      { id: 7, parents: [5, 6], title: "7", description: "7", image: "../images/photos/t.png" },
      { id: 8, parents: [7], title: "8", description: "8", image: "../images/photos/t.png" },
      { id: 9, parents: [7], title: "9", description: "9", image: "../images/photos/t.png" },
      { id: 10, parents: [8], title: "10", description: "10", image: "../images/photos/t.png" },
      { id: 11, parents: [8], title: "11", description: "11", image: "../images/photos/t.png" },
      { id: 12, parents: [9], title: "12", description: "12", image: "../images/photos/t.png" },
      { id: 13, parents: [9], title: "13", description: "13", image: "../images/photos/t.png" }
    ]
  };
  
  var skippedMembers = {
    cursorItem: 12,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 2,
        toItem: 13,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
      { id: 1, title: "James Holt", label: "James Holt", description: "1, Sr. VP, Server & Tools Division", phone: "262-215-7998", email: "jameholt@name.com", image: "../images/photos/e.png", itemTitleColor: "#4b0082" },
      { id: 101, title: "Brad Whitt", label: "Brad Whitt", description: "101, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", image: "../images/photos/f.png", itemTitleColor: "#4b0082" },
      { id: 2, parents: [1, 101], title: "Thomas Williams", label: "Thomas Williams", description: "2, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", image: "../images/photos/r.png", itemTitleColor: "#4b0082" },
      { id: 3, parents: [2], title: "David Kirby", label: "David Kirby", description: "3, AGM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", image: "../images/photos/t.png", itemTitleColor: "#4b0082" },
      { id: 11, title: "Lynette Maloney", label: "Lynette Maloney", description: "11, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", image: "../images/photos/y.png", itemTitleColor: "#4b0082" },
      { id: 111, title: "Sara Kemp", label: "Sara Kemp", description: "111, VP, Software & Enterprise Management Division", phone: "918-257-4218", email: "sarakemp@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
      { id: 12, parents: [11, 111], title: "Glen Zeigler", label: "Glen Zeigler", description: "12, GM, Core Infrastructure Solutions", phone: "920-665-7222", email: "glenzeig@name.com", image: "../images/photos/u.png", itemTitleColor: "#4b0082" },
      { id: 13, parents: [12], title: "Ione Gallegos", label: "Ione Gallegos", description: "13, GM, Patterns & Practices", phone: "478-322-5539", email: "ionegall@name.com", image: "../images/photos/i.png", itemTitleColor: "#4b0082" },
      { id: 20, parents: [1, 101, 2, 11, 111, 12], title: "Heather Simmons", label: "Heather Simmons", description: "20, GM, Name Learning", phone: "620-368-3620", email: "heatsimm@name.com", image: "../images/photos/p.png", itemTitleColor: "#4b0082" },
      { id: 21, title: "Steven Lacombe", label: "Steven Lacombe", description: "21, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", image: "../images/photos/a.png", itemTitleColor: "#4b0082" },
      { id: 121, title: "Brian Cruz", label: "Brian Cruz", description: "121, GM, Systems Management Server", phone: "320-833-9024", email: "briacruz@name.com", image: "../images/photos/h.png", itemTitleColor: "#4b0082" },
      { id: 22, parents: [21, 121], title: "Nancy Smith", label: "Nancy Smith", description: "22, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", image: "../images/photos/s.png", itemTitleColor: "#4b0082" },
      { id: 23, parents: [22], title: "Jean Kendall", label: "Jean Kendall", description: "23, GM, DML Server Marketing", phone: "949-453-0415", email: "jeankend@name.com", image: "../images/photos/d.png", itemTitleColor: "#4b0082" },
      { id: 30, parents: [21, 121, 22, 11, 111, 12], title: "Brad Whitt", label: "Brad Whitt", description: "30, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", image: "../images/photos/f.png", itemTitleColor: "#4b0082" }
    ]
  };
  
  var horizontalChain = {
    cursorItem: 2,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 8,
        toItem: 10,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
       //TSVS
  { id: 2, parents: [], title: "unknown", itemTitleColor: "#ddd", groupTitle: "tsv" },

  { id: 3, parents: [], title: "climate_zone", itemTitleColor: "#ddd", groupTitle: "tsv" },
  { id: 150, parents: [], title: "simulation_year", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 151, parents: [], title: "rotation", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 4, parents: [3], title: "county_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 5, parents: [4], title: "building_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 6, parents: [4], title: "state_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 7, parents: [5], title: "hvac_tst_htg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 8, parents: [5], title: "hvac_tst_clg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 9, parents: [5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 170, parents: [9,5], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 171, parents: [9,5], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 10, parents: [5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 172, parents: [10,5], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 173, parents: [10,5], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 11, parents: [3,5], title: "number_stories", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 12, parents: [3,5], title: "year_built", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 174, parents: [12], title: "year_bin_of_original_building_construction", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 175, parents: [12,150], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 176, parents: [12,150], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 177, parents: [12,150], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 178, parents: [12,150], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 179, parents: [12,150], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 180, parents: [12,150], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 181, parents: [12,150], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 182, parents: [12,150], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 13, parents: [3,5], title: "rentable_area", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 15, parents: [5,23], title: "hvac_system_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 16, parents: [5], title: "service_water_heating_fuel", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right,},

  { id: 17, parents: [5], title: "weekday_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 18, parents: [17], title: "weekday_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 19, parents: [5], title: "weekend_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 20, parents: [19], title: "weekend_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 21, parents: [5], title: "hvac_tst_htg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 22, parents: [5], title: "hvac_tst_clg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 25, parents: [5], title: "hvac_night_variability", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  
  { id: 23, parents: [6], title: "region", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 156, parents: [6], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 157, parents: [6], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 158, parents: [6], title: "energy_code_compliance_hvac", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 159, parents: [6], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 160, parents: [6], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 161, parents: [6], title: "energy_code_compliance_roof", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 162, parents: [6], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 163, parents: [6], title: "energy_code_compliance_walls", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 164, parents: [6], title: "energy_code_compliance_windows", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 152, parents: [155], title: "building_subtype", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 153, parents: [155], title: "building_shape", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 154, parents: [153], title: "aspect_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 155, parents: [], title: "", itemTitleColor: "#ddd", groupTitle: "", placementType: primitives.AdviserPlacementType.Right},


 { id: 190, parents: [174], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 191, parents: [175,157], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 192, parents: [176,158], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 193, parents: [177,159], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 194, parents: [178,160], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 195, parents: [179,161], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 196, parents: [180,162], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 197, parents: [181,163], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 198, parents: [182,164], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


 { id: 200, parents: [190,156], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 202, parents: [191,157], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 203, parents: [192,158], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 204, parents: [193,159], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 205, parents: [194,160], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 206, parents: [195,161], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 207, parents: [196,162], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 208, parents: [197,163], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 209, parents: [198,164], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 201, parents: [174,5,13], title: "window_wall_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 //   bldg stock
 
  { id: 27, parents: [10], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right, position: 2 },
  { id: 28, parents: [172], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 120, parents: [173], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 24, parents: [156], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 110, parents: [157], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 111, parents: [158], title: "energy_code_compliance_hvac", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 112, parents: [159], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 113, parents: [160], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 114, parents: [161], title: "energy_code_compliance_roof", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 115, parents: [162], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 116, parents: [163], title: "energy_code_compliance_walls", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 117, parents: [164], title: "energy_code_compliance_windows", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 130, parents: [200], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 32, parents: [190], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 140, parents: [191], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 141, parents: [192], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 142, parents: [193], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 143, parents: [194], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 144, parents: [195], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 145, parents: [196], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 146, parents: [197], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 147, parents: [198], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 33, parents: [202], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 90, parents: [203], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 91, parents: [204], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 92, parents: [205], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 93, parents: [206], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 94, parents: [207], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 95, parents: [208], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 96, parents: [209], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 83, parents: [154], title: "aspect_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 84, parents: [153], title: "building_shape", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv",  placementType: primitives.AdviserPlacementType.Right},
 { id: 85, parents: [5], title: "building_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 88, parents: [152], title: "building_subtype", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 86, parents: [3], title: "climate_zone", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 87, parents: [4], title: "county_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 36, parents: [11], title: "number_stories", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 36, parents: [2], title: "ownership_status", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 37, parents: [2], title: "party_responsible_for_operation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 38, parents: [9], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 39, parents: [170], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 40, parents: [171], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 127, parents: [121], title: "heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 121, parents: [15], title: "hvac_system_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 122, parents: [21], title: "hvac_tst_clg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 123, parents: [22], title: "hvac_tst_clg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 124, parents: [7], title: "hvac_tst_htg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 125, parents: [21], title: "hvac_tst_htg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 126, parents: [25], title: "hvac_night_variability", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 41, parents: [2], title: "purchase_input_responsibility", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 42, parents: [23], title: "region", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 43, parents: [13], title: "rentable_area", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 44, parents: [151], title: "rotation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 45, parents: [16], title: "service_water_heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 46, parents: [6], title: "state_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 47, parents: [18], title: "weekday_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 48, parents: [17], title: "weekday_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 49, parents: [20], title: "weekend_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 50, parents: [19], title: "weekend_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 51, parents: [32,43], title: "window_wall_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 60, parents: [174], title: "year_bin_of_original_building_construction", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 52, parents: [175], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 53, parents: [176], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 54, parents: [177], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 55, parents: [178], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 56, parents: [179], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 57, parents: [180], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 58, parents: [181], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 59, parents: [182], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 61, parents: [12], title: "year_built", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right}, 

 { id: 62, parents: [150], title: "year_of_simulation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 



 //measures subs
 { id: 63, parents: [62], title: "add_blinds_to_selected_windows", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 64, parents: [126], title: "add_hvac_nighttime_operation_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 65, parents: [122,123,124,125], title: "add_thermostat_setpoint_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 66, parents: [62,86,87], title: "ChangeBuildingLocation", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 67, parents: [33,36,43,44,51,90,91,92,93,94,95,96,35,43,44,51,83,85,86,88,130,202], title: "create_bar_from_building_type_ratios", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 68, parents: [33,45,47,48,49,50,90,91,92,93,94,95,96,35,36,45,47,48,49,50,86,121,130,], title: "create_typical_building_from_model", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 69, parents: [39,40], title: "set_electric_equipment_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 70, parents: [33,86,90,97,131], title: "set_exterior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 71, parents: [127], title: "set_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 72, parents: [86,98,132], title: "set_hvac_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 73, parents: [86,92,99], title: "set_interior_equipment_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 74, parents: [27,28], title: "set_interior_lighting_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 75, parents: [86,100], title: "set_interior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 76, parents: [86,93,101], title: "set_roof_template", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 77, parents: [45], title: "set_service_water_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 78, parents: [86,94,102], title: "set_service_water_heating_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 79, parents: [62], title: "set_space_type_load_subcategories", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 80, parents: [86,95,103], title: "set_wall_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 81, parents: [86,96], title: "set_window_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},

 { id: 82, parents: [62], title: "simulation_settings", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
    ]
  };
  
  var alignmentData = {
    cursorItem: 6,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 2,
        toItem: 5,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
      { id: 1, title: "James Holt", label: "James Holt", description: "1, Sr. VP, Server & Tools Division", phone: "262-215-7998", email: "jameholt@name.com", image: "../images/photos/e.png", itemTitleColor: "#4b0082" },
      { id: 2, parents: [1, 101, 102, 103], title: "Brad Whitt", label: "Brad Whitt", description: "2, GM, Application Platform and Development Marketing", phone: "502-528-6379", email: "bradwhit@name.com", image: "../images/photos/f.png", itemTitleColor: "#4b0082" },
      { id: 3, parents: [2], title: "Thomas Williams", label: "Thomas Williams", description: "3, VP, Server & Tools Marketing and Solutions", phone: "904-547-5342", email: "thomwill@name.com", image: "../images/photos/r.png", itemTitleColor: "#4b0082" },
      { id: 4, parents: [3], title: "David Kirby", label: "David Kirby", description: "4, AGM, Infrastructure Server and IT Pro Audience Marketing", phone: "614-395-7238", email: "davikirb@name.com", image: "../images/photos/t.png", itemTitleColor: "#4b0082" },
      { id: 5, parents: [4], title: "Lynette Maloney", label: "Lynette Maloney", description: "5, GM, Name.com Experience Platforms and Solutions", phone: "540-822-3862", email: "lynemalo@name.com", image: "../images/photos/y.png", itemTitleColor: "#4b0082" },
      { id: 6, parents: [1, 101, 102, 103], title: "Aligned Item", label: "Aligned Item", description: "Use GroupBy Parents/Children option to align this item", phone: "620-368-3620", email: "heatsimm@name.com", image: "../images/photos/p.png", itemTitleColor: "#ff0000" },
      { id: 7, parents: [5, 6], title: "Steven Lacombe", label: "Steven Lacombe", description: "10, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", image: "../images/photos/a.png", itemTitleColor: "#4b0082" }
    ]
  };
  
  var famdataCascade = {
    cursorItem: 10,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 10,
        toItem: 5,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
      { id: 10, title: "James", label: "James", description: "Parent of: Steven, Heather, Ione, Glen & Sara", phone: "262-215-7998", email: "jameholt@name.com", image: "../images/photos/e.png", itemTitleColor: "#4b0082" },
      { id: 11, title: "Brad", label: "Brad", description: "Parent of: Heather, Ione, Glen & Sara", phone: "502-528-6379", email: "bradwhit@name.com", image: "../images/photos/f.png", itemTitleColor: "#4b0082" },
      { id: 12, title: "Thomas", label: "Thomas", description: "Parent of: Ione, Glen & Sara", phone: "904-547-5342", email: "thomwill@name.com", image: "../images/photos/r.png", itemTitleColor: "#4b0082" },
      { id: 13, title: "David", label: "David", description: "Parent of: Glen & Sara", phone: "614-395-7238", email: "davikirb@name.com", image: "../images/photos/t.png", itemTitleColor: "#4b0082" },
      { id: 14, title: "Lynette", label: "Lynette", description: "Parent of Sara", phone: "540-822-3862", email: "lynemalo@name.com", image: "../images/photos/y.png", itemTitleColor: "#4b0082" },
      { id: 1, parents: [10, 11, 12, 13, 14], title: "Sara", label: "Sara", description: "Child of James, Brad, Thomas, David & Lynette", phone: "918-257-4218", email: "sarakemp@name.com", image: "../images/photos/g.png", itemTitleColor: "#4b0082" },
      { id: 2, parents: [10, 11, 12, 13], title: "Glen", label: "Glen", description: "Child of James, Brad, Thomas & David", phone: "920-665-7222", email: "glenzeig@name.com", image: "../images/photos/u.png", itemTitleColor: "#4b0082" },
      { id: 3, parents: [10, 11, 12], title: "Ione", label: "Ione", description: "Child of James, Brad & Thomas", phone: "478-322-5539", email: "ionegall@name.com", image: "../images/photos/i.png", itemTitleColor: "#4b0082" },
      { id: 4, parents: [10, 11], title: "Heather", label: "Heather", description: "Child of James & Brad", phone: "620-368-3620", email: "heatsimm@name.com", image: "../images/photos/p.png", itemTitleColor: "#4b0082" },
      { id: 5, parents: [10], title: "Steven", label: "Steven", description: "Child of James", phone: "805-800-7397", email: "stevlaco@name.com", image: "../images/photos/a.png", itemTitleColor: "#4b0082" }
    ]
  };
  
  var famdataWorld = {
    cursorItem: 2,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 2,
        toItem: 31,
        label: "<span class=\"badge bg-danger\">1</span>Connector annotation",
        labelSize: { width: 80, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
      { id: 1, parents: [], title: "S1", label: "S1", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 3, parents: [2], title: "3", label: "3", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 4, parents: [3, 11, 26, 38, 42], title: "4", label: "4", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 5, parents: [4], title: "5", label: "5", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 6, parents: [5], title: "6", label: "6", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 7, parents: [6], title: "7", label: "7", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 8, parents: [], title: "S8", label: "S8", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 9, parents: [8], title: "9", label: "9", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 10, parents: [1, 101, 102, 103], title: "10", label: "10", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 11, parents: [10], title: "11", label: "11", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 12, parents: [10], title: "12", label: "12", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 13, parents: [10], title: "13", label: "13", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 14, parents: [10], title: "14", label: "14", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 15, parents: [14, 16, 20, 39], title: "15", label: "15", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 16, parents: [2], title: "16", label: "16", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 17, parents: [2], title: "17", label: "17", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 18, parents: [2], title: "18", label: "18", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 19, parents: [13, 17, 36, 40], title: "19", label: "19", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 20, parents: [19], title: "20", label: "20", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 21, parents: [19], title: "21", label: "21", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 22, parents: [21], title: "22", label: "22", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 23, parents: [5, 22, 32], title: "23", label: "23", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 24, parents: [], title: "S24", label: "S24", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 25, parents: [24], title: "25", label: "25", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 26, parents: [25], title: "26", label: "26", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 27, parents: [24], title: "27", label: "27", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 28, parents: [19], title: "28", label: "28", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 29, parents: [12, 18, 28, 34, 41], title: "29", label: "29", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 30, parents: [], title: "S30", label: "S30", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 31, parents: [30], title: "31", label: "31", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 32, parents: [31], title: "32", label: "32", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 33, parents: [30], title: "33", label: "33", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 34, parents: [33], title: "34", label: "34", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 35, parents: [], title: "35", label: "35", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 36, parents: [35], title: "36", label: "36", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 37, parents: [], title: "37", label: "37", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 38, parents: [37, 43], title: "38", label: "38", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 39, parents: [37], title: "39", label: "39", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 40, parents: [37, 43], title: "40", label: "40", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 41, parents: [37], title: "41", label: "41", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 42, parents: [9], title: "42", label: "42", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 43, parents: [35], title: "43", label: "43", description: "", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 1001, parents: [2, 9, 10, 15, 23, 25, 31], title: "T1", label: "T1", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 1008, parents: [7], title: "T8", label: "T8", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 1024, parents: [23, 27], title: "T24", label: "T24", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 1030, parents: [29, 33], title: "T30", label: "T30", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 1035, parents: [5, 22], title: "T35", label: "T35", description: "", image: "../images/photos/j.png", itemTitleColor: "#ff0000" }
    ]
  };
  
  var linkedListLoopTest = {
    cursorItem: 2,
    annotations: [
      { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [2], title: "12%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 2, toItems: [3], title: "23%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 3, toItems: [4], title: "34%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 4, toItems: [5], title: "34%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [5], title: "15%" }
    ],
    items: [
      { id: 1, parents: [5,2], title: "1", label: "1", description: "1", image: "../images/photos/a.png", itemTitleColor: "#ff0000" },
      { id: 2, parents: [1,3], title: "2", label: "2", description: "2", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 3, parents: [2,4], title: "3", label: "3", description: "3", image: "../images/photos/c.png", itemTitleColor: "#4b0082" },
      { id: 4, parents: [3,5], title: "4", label: "4", description: "4", image: "../images/photos/d.png", itemTitleColor: "#4b0082" },
      { id: 5, parents: [4,1], title: "5", label: "5", description: "5", image: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    ]
  };
  
  var intelinkedNodes = {
    cursorItem: 1,
    annotations: [
    ],
    items: [
      { id: 1, parents: [1,2,3,4,5], title: "1", label: "1", description: "1", image: "../images/photos/a.png", itemTitleColor: "#ff0000" },
      { id: 2, parents: [1,2,3,4,5], title: "2", label: "2", description: "2", image: "../images/photos/b.png", itemTitleColor: "#4b0082" },
      { id: 3, parents: [1,2,3,4,5], title: "3", label: "3", description: "3", image: "../images/photos/c.png", itemTitleColor: "#4b0082" },
      { id: 4, parents: [1,2,3,4,5], title: "4", label: "4", description: "4", image: "../images/photos/d.png", itemTitleColor: "#4b0082" },
      { id: 5, parents: [1,2,3,4,5], title: "5", label: "5", description: "5", image: "../images/photos/e.png", itemTitleColor: "#4b0082" },
    ]
  };
  
  var famdataCharless2 = {
    cursorItem: 2,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 3,
        toItem: 4,
        label: "<span class=\"badge bg-danger\">1</span>",
        labelSize: { width: 30, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
      { id: 1, title: "Philip of Castile", label: "Philip of Castile", description: "1, 1478-1506", image: "../images/photos/p.png", itemTitleColor: "#ff0000" },
      { id: 2, title: "Joanna of Castile", label: "Joanna of Castile", description: "2, 1479-1555", image: "../images/photos/j.png", itemTitleColor: "#4b0082" },
      { id: 3, parents: [1, 2], title: "Charles V", label: "Charles V", description: "3, Holy Roman Emperor", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 4, title: "Isabella of Portugal", label: "Isabella of Portugal", description: "4, 1503 - 39", image: "../images/photos/i.png", itemTitleColor: "#4b0082" },
      { id: 5, parents: [3, 4], title: "Philip II of Spain", label: "Philip II of Spain", description: "5, ", image: "../images/photos/p.png", itemTitleColor: "#4b0082" },
      { id: 6, parents: [3, 4], title: "Maria of Spain", label: "Maria of Spain", description: "6, 1528 - 1603", image: "../images/photos/j.png", itemTitleColor: "#ff0000" },
      { id: 7, parents: [1, 2], title: "Ferdinand I", label: "Ferdinand I", description: "7, Holy Roman Emperor, 1503-64", image: "../images/photos/h.png", itemTitleColor: "#ff0000" },
      { id: 8, parents: [1, 2], title: "Isabella of Burgundy", label: "Isabella of Burgundy", description: "8, 1501-26", image: "../images/photos/h.png", itemTitleColor: "#ff0000" },
      { id: 9, title: "Anna of Bohemia and Hungary", label: "Anna of Bohemia and Hungary", description: "9, 1503-47", image: "../images/photos/i.png", itemTitleColor: "#4b0082" },
      { id: 10, title: "Christian II of Denmark", label: "Christian II of Denmark", description: "10, 1481-1559", image: "../images/photos/i.png", itemTitleColor: "#4b0082" },
      { id: 11, parents: [7, 9], title: "Maximilian II", label: "Maximilian II", description: "11, Holy Roman Emperor 1527-76", image: "../images/photos/h.png", itemTitleColor: "#ff0000" },
      { id: 12, parents: [7, 9], title: "Charles II of Austria", label: "Charles II of Austria", description: "12, 1540-90", image: "../images/photos/h.png", itemTitleColor: "#ff0000" },
      { id: 13, parents: [7, 9], title: "Anne of Habsburg", label: "Anne of Habsburg", description: "13, 1528-90", image: "../images/photos/a.png", itemTitleColor: "#ff0000" },
      { id: 14, title: "Albert V", label: "Albert V", description: "14, Duke of Bavaria 1528-79", image: "../images/photos/i.png", itemTitleColor: "#4b0082" },
      { id: 15, parents: [8, 10], title: "Christina of Denmark", label: "Christina of Denmark", description: "13, 1522-90", image: "../images/photos/a.png", itemTitleColor: "#ff0000" },
      { id: 16, title: "Francis I", label: "Francis I", description: "14, Duke of Lorraine 1517-45", image: "../images/photos/i.png", itemTitleColor: "#4b0082" },
      { id: 17, parents: [6, 11], title: "Anne of Austria", label: "Anne of Austria", description: "17, 1549-80", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 18, parents: [5, 17], title: "Philip III of Spain", label: "Philip III of Spain", description: "18, 1578-1621", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 19, parents: [13, 14], title: "Maria Anna of Bavaria", label: "Maria Anna of Bavaria", description: "19, 1551-1608", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 20, parents: [13, 14], title: "William V, Duke of Bavaria", label: "William V, Duke of Bavaria", description: "20, 1548-1626", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 21, parents: [15, 16], title: "Renata of Lorraine", label: "Renata of Lorraine", description: "21, 1544-1602", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 22, parents: [12, 19], title: "Margarita of Austria", label: "Margarita of Austria", description: "22, 1584-1611", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 23, parents: [12, 19], title: "Ferdinand II", label: "Ferdinand II", description: "23, Holy Roman Emperor 1578-1637", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 24, parents: [20, 21], title: "Maria Anna of Bavaria", label: "Maria Anna of Bavaria", description: "24, 1574-1616", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 25, parents: [18, 22], title: "Philip IV of Spain", label: "Philip IV of Spain", description: "25, 1605-65", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 26, parents: [18, 22], title: "Maria Anna of Spain", label: "Maria Anna of Spain", description: "26, 1606-46", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 27, parents: [23, 24], title: "Ferdinand III", label: "Ferdinand III", description: "27, 1608-57", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 28, parents: [26, 27], title: "Manata of Austria", label: "Manata of Austria", description: "28, 1634-96", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 29, parents: [25, 28], title: "Charles II of Spain", label: "Charles II of Spain", description: "29, 1661-1700", image: "../images/photos/c.png", itemTitleColor: "#ff0000" }
    ]
  };
  
  var matrixLayout = {
    cursorItem: 1,
    enableMatrixLayout: true,
    //normalItemsInterval: 30,
    //dotItemsInterval: 20,
    //lineItemsInterval: 10,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 10,
        toItem: 24,
        label: "<span class=\"badge bg-danger\">1</span>",
        labelSize: { width: 30, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
       //TSVS
  { id: 2, parents: [], title: "unknown", itemTitleColor: "#ddd", groupTitle: "tsv" },

  { id: 3, parents: [], title: "climate_zone", itemTitleColor: "#ddd", groupTitle: "tsv" },
  { id: 150, parents: [], title: "simulation_year", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 151, parents: [], title: "rotation", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 4, parents: [3], title: "county_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 5, parents: [4], title: "building_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 6, parents: [4], title: "state_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 7, parents: [5], title: "hvac_tst_htg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 8, parents: [5], title: "hvac_tst_clg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 9, parents: [5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 170, parents: [9,5], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 171, parents: [9,5], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 10, parents: [5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 172, parents: [10,5], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 173, parents: [10,5], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 11, parents: [3,5], title: "number_stories", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 12, parents: [3,5], title: "year_built", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 174, parents: [12], title: "year_bin_of_original_building_construction", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 175, parents: [12,150], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 176, parents: [12,150], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 177, parents: [12,150], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 178, parents: [12,150], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 179, parents: [12,150], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 180, parents: [12,150], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 181, parents: [12,150], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 182, parents: [12,150], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 13, parents: [3,5], title: "rentable_area", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 15, parents: [5,23], title: "hvac_system_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 16, parents: [5], title: "service_water_heating_fuel", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right,},

  { id: 17, parents: [5], title: "weekday_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 18, parents: [17], title: "weekday_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 19, parents: [5], title: "weekend_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 20, parents: [19], title: "weekend_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 21, parents: [5], title: "hvac_tst_htg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 22, parents: [5], title: "hvac_tst_clg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 25, parents: [5], title: "hvac_night_variability", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  
  { id: 23, parents: [6], title: "region", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 156, parents: [6], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 157, parents: [6], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 158, parents: [6], title: "energy_code_compliance_hvac", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 159, parents: [6], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 160, parents: [6], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 161, parents: [6], title: "energy_code_compliance_roof", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 162, parents: [6], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 163, parents: [6], title: "energy_code_compliance_walls", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 164, parents: [6], title: "energy_code_compliance_windows", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 152, parents: [155], title: "building_subtype", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 153, parents: [155], title: "building_shape", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 154, parents: [153], title: "aspect_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 155, parents: [], title: "", itemTitleColor: "#ddd", groupTitle: "", placementType: primitives.AdviserPlacementType.Right},


 { id: 190, parents: [174], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 191, parents: [175,157], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 192, parents: [176,158], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 193, parents: [177,159], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 194, parents: [178,160], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 195, parents: [179,161], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 196, parents: [180,162], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 197, parents: [181,163], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 198, parents: [182,164], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


 { id: 200, parents: [190,156], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 202, parents: [191,157], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 203, parents: [192,158], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 204, parents: [193,159], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 205, parents: [194,160], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 206, parents: [195,161], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 207, parents: [196,162], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 208, parents: [197,163], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 209, parents: [198,164], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 201, parents: [174,5,13], title: "window_wall_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 //   bldg stock
 
  { id: 27, parents: [10], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right, position: 2 },
  { id: 28, parents: [172], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 120, parents: [173], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 24, parents: [156], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 110, parents: [157], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 111, parents: [158], title: "energy_code_compliance_hvac", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 112, parents: [159], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 113, parents: [160], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 114, parents: [161], title: "energy_code_compliance_roof", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 115, parents: [162], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 116, parents: [163], title: "energy_code_compliance_walls", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 117, parents: [164], title: "energy_code_compliance_windows", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 130, parents: [200], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 32, parents: [190], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 140, parents: [191], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 141, parents: [192], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 142, parents: [193], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 143, parents: [194], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 144, parents: [195], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 145, parents: [196], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 146, parents: [197], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 147, parents: [198], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 33, parents: [202], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 90, parents: [203], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 91, parents: [204], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 92, parents: [205], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 93, parents: [206], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 94, parents: [207], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 95, parents: [208], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 96, parents: [209], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 83, parents: [154], title: "aspect_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 84, parents: [153], title: "building_shape", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv",  placementType: primitives.AdviserPlacementType.Right},
 { id: 85, parents: [5], title: "building_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 88, parents: [152], title: "building_subtype", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 86, parents: [3], title: "climate_zone", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 87, parents: [4], title: "county_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 36, parents: [11], title: "number_stories", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 36, parents: [2], title: "ownership_status", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 37, parents: [2], title: "party_responsible_for_operation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 38, parents: [9], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 39, parents: [170], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 40, parents: [171], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 127, parents: [121], title: "heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 121, parents: [15], title: "hvac_system_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 122, parents: [21], title: "hvac_tst_clg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 123, parents: [22], title: "hvac_tst_clg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 124, parents: [7], title: "hvac_tst_htg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 125, parents: [21], title: "hvac_tst_htg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 126, parents: [25], title: "hvac_night_variability", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 41, parents: [2], title: "purchase_input_responsibility", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 42, parents: [23], title: "region", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 43, parents: [13], title: "rentable_area", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 44, parents: [151], title: "rotation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 45, parents: [16], title: "service_water_heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 46, parents: [6], title: "state_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 47, parents: [18], title: "weekday_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 48, parents: [17], title: "weekday_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 49, parents: [20], title: "weekend_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 50, parents: [19], title: "weekend_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 51, parents: [32,43], title: "window_wall_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 60, parents: [174], title: "year_bin_of_original_building_construction", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 52, parents: [175], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 53, parents: [176], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 54, parents: [177], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 55, parents: [178], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 56, parents: [179], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 57, parents: [180], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 58, parents: [181], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 59, parents: [182], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 61, parents: [12], title: "year_built", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right}, 

 { id: 62, parents: [150], title: "year_of_simulation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 



 //measures subs
 { id: 63, parents: [62], title: "add_blinds_to_selected_windows", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 64, parents: [126], title: "add_hvac_nighttime_operation_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 65, parents: [122,123,124,125], title: "add_thermostat_setpoint_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 66, parents: [62,86,87], title: "ChangeBuildingLocation", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 67, parents: [33,36,43,44,51,90,91,92,93,94,95,96,35,43,44,51,83,85,86,88,130,202], title: "create_bar_from_building_type_ratios", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 68, parents: [33,45,47,48,49,50,90,91,92,93,94,95,96,35,36,45,47,48,49,50,86,121,130,], title: "create_typical_building_from_model", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 69, parents: [39,40], title: "set_electric_equipment_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 70, parents: [33,86,90,97,131], title: "set_exterior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 71, parents: [127], title: "set_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 72, parents: [86,98,132], title: "set_hvac_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 73, parents: [86,92,99], title: "set_interior_equipment_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 74, parents: [27,28], title: "set_interior_lighting_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 75, parents: [86,100], title: "set_interior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 76, parents: [86,93,101], title: "set_roof_template", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 77, parents: [45], title: "set_service_water_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 78, parents: [86,94,102], title: "set_service_water_heating_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 79, parents: [62], title: "set_space_type_load_subcategories", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 80, parents: [86,95,103], title: "set_wall_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 81, parents: [86,96], title: "set_window_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},

 { id: 82, parents: [62], title: "simulation_settings", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
    ]
  };
  
  var matrixNLabelsLayout = {
    cursorItem: 1,
    enableMatrixLayout: true,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 10,
        toItem: 24,
        label: "<span class=\"badge bg-danger\">1</span>",
        labelSize: { width: 30, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
      { id: 1, parents: [], title: "1", label: "1", description: "", image: "../images/photos/z.png", itemTitleColor: "#ff0000" },
      { id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", description: "", image: "../images/photos/a.png", itemTitleColor: "#ff0000" },
      { id: 3, parents: [1, 101, 102, 103], title: "3", label: "3", description: "", image: "../images/photos/b.png", itemTitleColor: "#ff0000" },
      { id: 4, parents: [1, 101, 102, 103], title: "4", label: "4", description: "", image: "../images/photos/c.png", itemTitleColor: "#ff0000" },
      { id: 6, parents: [1, 101, 102, 103], title: "6", label: "6", description: "", image: "../images/photos/e.png", itemTitleColor: "#ff0000" },
      { id: 7, parents: [1, 101, 102, 103], title: "7", label: "7", description: "", image: "../images/photos/f.png", itemTitleColor: "#ff0000" },
      { id: 8, parents: [1, 101, 102, 103], title: "8", label: "8", description: "", image: "../images/photos/g.png", itemTitleColor: "#ff0000" },
      { id: 10, parents: [1, 101, 102, 103], title: "10", label: "10", description: "", image: "../images/photos/i.png", itemTitleColor: "#ff0000" },
      { id: 11, parents: [1, 101, 102, 103], title: "11", label: "11", description: "", image: "../images/photos/b.png", itemTitleColor: "#ff0000" },
      { id: 12, parents: [11], title: "12", label: "12", description: "", image: "../images/photos/b.png", itemTitleColor: "#ff0000" },
      { id: 33, parents: [2, 3, 4, 6, 7, 8, 10, 12], title: "33", label: "33", description: "", image: "../images/photos/m.png", itemTitleColor: "#4b0082" }
    ],
    annotations: [
      { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [2], title: "1->2" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [3], title: "1->3" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [4], title: "1->4" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [6], title: "1->6" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [7], title: "1->7" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [8], title: "1->8" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 1, toItems: [10], title: "1->10" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [2], title: "33->2" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [3], title: "33->3" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [4], title: "33->4" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [6], title: "33->6" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [7], title: "33->7" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 33, toItems: [8], title: "33->8" }
    ]
  };
  
  var matrixGroups = {
    cursorItem: 1,
    enableMatrixLayout: true,
    minimumMatrixSize: 3,
   /*  annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 10,
        toItem: 24,
        label: "<span class=\"badge bg-danger\">1</span>",
        labelSize: { width: 30, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ], */
    items: [
       //TSVS
  { id: 2, parents: [], title: "unknown", itemTitleColor: "#ddd", groupTitle: "tsv" },

  { id: 3, parents: [], title: "climate_zone", itemTitleColor: "#ddd", groupTitle: "tsv" },
  { id: 150, parents: [], title: "simulation_year", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 151, parents: [], title: "rotation", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 4, parents: [3], title: "county_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 5, parents: [4], title: "building_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 6, parents: [4], title: "state_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 7, parents: [5], title: "hvac_tst_htg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 8, parents: [5], title: "hvac_tst_clg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 9, parents: [5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 170, parents: [9,5], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 171, parents: [9,5], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 10, parents: [5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 172, parents: [10,5], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 173, parents: [10,5], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 11, parents: [3,5], title: "number_stories", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 12, parents: [3,5], title: "year_built", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 174, parents: [12], title: "year_bin_of_original_building_construction", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 175, parents: [12,150], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 176, parents: [12,150], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 177, parents: [12,150], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 178, parents: [12,150], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 179, parents: [12,150], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 180, parents: [12,150], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 181, parents: [12,150], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 182, parents: [12,150], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 13, parents: [3,5], title: "rentable_area", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


  { id: 15, parents: [5,23], title: "hvac_system_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 16, parents: [5], title: "service_water_heating_fuel", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right,},

  { id: 17, parents: [5], title: "weekday_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 18, parents: [17], title: "weekday_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 19, parents: [5], title: "weekend_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 20, parents: [19], title: "weekend_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 21, parents: [5], title: "hvac_tst_htg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 22, parents: [5], title: "hvac_tst_clg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 25, parents: [5], title: "hvac_night_variability", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  
  { id: 23, parents: [6], title: "region", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 156, parents: [6], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 157, parents: [6], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 158, parents: [6], title: "energy_code_compliance_hvac", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 159, parents: [6], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 160, parents: [6], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 161, parents: [6], title: "energy_code_compliance_roof", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 162, parents: [6], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 163, parents: [6], title: "energy_code_compliance_walls", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 164, parents: [6], title: "energy_code_compliance_windows", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

  { id: 152, parents: [155], title: "building_subtype", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 153, parents: [155], title: "building_shape", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 154, parents: [153], title: "aspect_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 155, parents: [], title: "", itemTitleColor: "#ddd", groupTitle: "", placementType: primitives.AdviserPlacementType.Right},


 { id: 190, parents: [174], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 191, parents: [175,157], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 192, parents: [176,158], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 193, parents: [177,159], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 194, parents: [178,160], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 195, parents: [179,161], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 196, parents: [180,162], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 197, parents: [181,163], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 198, parents: [182,164], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},


 { id: 200, parents: [190,156], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 202, parents: [191,157], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 203, parents: [192,158], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 204, parents: [193,159], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 205, parents: [194,160], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 206, parents: [195,161], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 207, parents: [196,162], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 208, parents: [197,163], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 { id: 209, parents: [198,164], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 { id: 201, parents: [174,5,13], title: "window_wall_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},

 //   bldg stock
 
  { id: 27, parents: [10], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right, position: 2 },
  { id: 28, parents: [172], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 120, parents: [173], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 24, parents: [156], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 110, parents: [157], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 111, parents: [158], title: "energy_code_compliance_hvac", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 112, parents: [159], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 113, parents: [160], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 114, parents: [161], title: "energy_code_compliance_roof", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 115, parents: [162], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 116, parents: [163], title: "energy_code_compliance_walls", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 117, parents: [164], title: "energy_code_compliance_windows", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 130, parents: [200], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 32, parents: [190], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 140, parents: [191], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 141, parents: [192], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 142, parents: [193], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 143, parents: [194], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 144, parents: [195], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 145, parents: [196], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 146, parents: [197], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 147, parents: [198], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 33, parents: [202], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 90, parents: [203], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 91, parents: [204], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 92, parents: [205], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 93, parents: [206], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 94, parents: [207], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 95, parents: [208], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 96, parents: [209], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 83, parents: [154], title: "aspect_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 84, parents: [153], title: "building_shape", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv",  placementType: primitives.AdviserPlacementType.Right},
 { id: 85, parents: [5], title: "building_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 88, parents: [152], title: "building_subtype", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 86, parents: [3], title: "climate_zone", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 87, parents: [4], title: "county_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 36, parents: [11], title: "number_stories", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 36, parents: [2], title: "ownership_status", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 37, parents: [2], title: "party_responsible_for_operation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 38, parents: [9], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 39, parents: [170], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 40, parents: [171], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 127, parents: [121], title: "heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},


 { id: 121, parents: [15], title: "hvac_system_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 122, parents: [21], title: "hvac_tst_clg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 123, parents: [22], title: "hvac_tst_clg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 124, parents: [7], title: "hvac_tst_htg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 125, parents: [21], title: "hvac_tst_htg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 126, parents: [25], title: "hvac_night_variability", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 41, parents: [2], title: "purchase_input_responsibility", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 42, parents: [23], title: "region", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 43, parents: [13], title: "rentable_area", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 44, parents: [151], title: "rotation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 45, parents: [16], title: "service_water_heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 46, parents: [6], title: "state_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 47, parents: [18], title: "weekday_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 48, parents: [17], title: "weekday_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 49, parents: [20], title: "weekend_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 50, parents: [19], title: "weekend_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 51, parents: [32,43], title: "window_wall_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 60, parents: [174], title: "year_bin_of_original_building_construction", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 52, parents: [175], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 53, parents: [176], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 54, parents: [177], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 55, parents: [178], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 56, parents: [179], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 57, parents: [180], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 58, parents: [181], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 { id: 59, parents: [182], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},

 { id: 61, parents: [12], title: "year_built", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right}, 

 { id: 62, parents: [150], title: "year_of_simulation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 



 //measures subs
 { id: 63, parents: [62], title: "add_blinds_to_selected_windows", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 64, parents: [126], title: "add_hvac_nighttime_operation_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 65, parents: [122,123,124,125], title: "add_thermostat_setpoint_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 66, parents: [62,86,87], title: "ChangeBuildingLocation", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 67, parents: [33,36,43,44,51,90,91,92,93,94,95,96,35,43,44,51,83,85,86,88,130,202], title: "create_bar_from_building_type_ratios", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 68, parents: [33,45,47,48,49,50,90,91,92,93,94,95,96,35,36,45,47,48,49,50,86,121,130,], title: "create_typical_building_from_model", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},

 { id: 69, parents: [39,40], title: "set_electric_equipment_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 70, parents: [33,86,90,97,131], title: "set_exterior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 71, parents: [127], title: "set_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 72, parents: [86,98,132], title: "set_hvac_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 73, parents: [86,92,99], title: "set_interior_equipment_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 74, parents: [27,28], title: "set_interior_lighting_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 75, parents: [86,100], title: "set_interior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 76, parents: [86,93,101], title: "set_roof_template", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 { id: 77, parents: [45], title: "set_service_water_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 78, parents: [86,94,102], title: "set_service_water_heating_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 79, parents: [62], title: "set_space_type_load_subcategories", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 80, parents: [86,95,103], title: "set_wall_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 { id: 81, parents: [86,96], title: "set_window_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},

 { id: 82, parents: [62], title: "simulation_settings", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},

    ]
  };
  
  var labelsSelection = {
    cursorItem: 1,
    enableMatrixLayout: false,
    pageFitMode: primitives.PageFitMode.SelectionOnly,
    neighboursSelectionMode: primitives.NeighboursSelectionMode.ParentsAndChildren,
    annotations: [
      {
        annotationType: primitives.AnnotationType.Connector,
        fromItem: 10,
        toItem: 24,
        label: "<span class=\"badge bg-danger\">1</span>",
        labelSize: { width: 30, height: 30 }, //new primitives.Size(80, 30)
        connectorShapeType: primitives.ConnectorShapeType.OneWay,
        color: primitives.Colors.Red,
        offset: 5,
        lineWidth: 2,
        lineType: primitives.LineType.Dashed
      }
    ],
    items: [
      //TSVS

   //TSVS
   { id: 2, parents: [], title: "unknown", itemTitleColor: "#ddd", groupTitle: "tsv" },

   { id: 3, parents: [], title: "climate_zone", itemTitleColor: "#ddd", groupTitle: "tsv" },
   { id: 150, parents: [], title: "simulation_year", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 151, parents: [], title: "rotation", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 4, parents: [3], title: "county_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 5, parents: [4], title: "building_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 6, parents: [4], title: "state_id", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 7, parents: [5], title: "hvac_tst_htg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 8, parents: [5], title: "hvac_tst_clg_delta_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 9, parents: [5], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 170, parents: [9,5], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 171, parents: [9,5], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 10, parents: [5], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 172, parents: [10,5], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 173, parents: [10,5], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
 
   { id: 11, parents: [3,5], title: "number_stories", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 12, parents: [3,5], title: "year_built", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 174, parents: [12], title: "year_bin_of_original_building_construction", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 175, parents: [12,150], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 176, parents: [12,150], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 177, parents: [12,150], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 178, parents: [12,150], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 179, parents: [12,150], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 180, parents: [12,150], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 181, parents: [12,150], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 182, parents: [12,150], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#ddd",  groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 13, parents: [3,5], title: "rentable_area", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
 
   { id: 15, parents: [5,23], title: "hvac_system_type", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 16, parents: [5], title: "service_water_heating_fuel", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right,},
 
   { id: 17, parents: [5], title: "weekday_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 18, parents: [17], title: "weekday_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 19, parents: [5], title: "weekend_start_time", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 20, parents: [19], title: "weekend_duration", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 21, parents: [5], title: "hvac_tst_htg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 22, parents: [5], title: "hvac_tst_clg_sp_f", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 25, parents: [5], title: "hvac_night_variability", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   
   { id: 23, parents: [6], title: "region", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 156, parents: [6], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 157, parents: [6], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 158, parents: [6], title: "energy_code_compliance_hvac", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 159, parents: [6], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 160, parents: [6], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 161, parents: [6], title: "energy_code_compliance_roof", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 162, parents: [6], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 163, parents: [6], title: "energy_code_compliance_walls", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 164, parents: [6], title: "energy_code_compliance_windows", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
   { id: 152, parents: [155], title: "building_subtype", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 153, parents: [155], title: "building_shape", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 154, parents: [153], title: "aspect_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
   { id: 155, parents: [], title: "", itemTitleColor: "#ddd", groupTitle: "", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 190, parents: [174], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 191, parents: [175,157], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 192, parents: [176,158], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 193, parents: [177,159], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 194, parents: [178,160], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 195, parents: [179,161], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 196, parents: [180,162], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 197, parents: [181,163], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 198, parents: [182,164], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 200, parents: [190,156], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 202, parents: [191,157], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 203, parents: [192,158], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 204, parents: [193,159], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 205, parents: [194,160], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 206, parents: [195,161], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 207, parents: [196,162], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 208, parents: [197,163], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
  { id: 209, parents: [198,164], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 201, parents: [174,5,13], title: "window_wall_ratio", itemTitleColor: "#ddd", groupTitle: "tsv", placementType: primitives.AdviserPlacementType.Right},
 
  //   bldg stock
  
   { id: 27, parents: [10], title: "ltg_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right, position: 2 },
   { id: 28, parents: [172], title: "ltg_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
   { id: 120, parents: [173], title: "ltg_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 24, parents: [156], title: "energy_code_compliance_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 110, parents: [157], title: "energy_code_compliance_exterior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 111, parents: [158], title: "energy_code_compliance_hvac", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 112, parents: [159], title: "energy_code_compliance_interior_equipment", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 113, parents: [160], title: "energy_code_compliance_interior_lighting", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 114, parents: [161], title: "energy_code_compliance_roof", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 115, parents: [162], title: "energy_code_compliance_service_water_heating", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 116, parents: [163], title: "energy_code_compliance_walls", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 117, parents: [164], title: "energy_code_compliance_windows", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 130, parents: [200], title: "energy_code_followed_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 32, parents: [190], title: "energy_code_in_force_during_original_building_construction", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 140, parents: [191], title: "energy_code_in_force_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 141, parents: [192], title: "energy_code_in_force_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 142, parents: [193], title: "energy_code_in_force_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 143, parents: [194], title: "energy_code_in_force_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 144, parents: [195], title: "energy_code_in_force_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 145, parents: [196], title: "energy_code_in_force_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 146, parents: [197], title: "energy_code_in_force_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 147, parents: [198], title: "energy_code_in_force_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 33, parents: [202], title: "energy_code_followed_during_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 90, parents: [203], title: "energy_code_followed_during_last_hvac_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 91, parents: [204], title: "energy_code_followed_during_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 92, parents: [205], title: "energy_code_followed_during_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 93, parents: [206], title: "energy_code_followed_during_last_roof_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 94, parents: [207], title: "energy_code_followed_during_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 95, parents: [208], title: "energy_code_followed_during_last_walls_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 96, parents: [209], title: "energy_code_followed_during_last_windows_replacement", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 83, parents: [154], title: "aspect_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 84, parents: [153], title: "building_shape", itemTitleColor: "#a7e3f4", groupTitle: "buildstock.csv",  placementType: primitives.AdviserPlacementType.Right},
  { id: 85, parents: [5], title: "building_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 88, parents: [152], title: "building_subtype", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 86, parents: [3], title: "climate_zone", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 87, parents: [4], title: "county_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 36, parents: [11], title: "number_stories", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 36, parents: [2], title: "ownership_status", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 37, parents: [2], title: "party_responsible_for_operation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 38, parents: [9], title: "plugload_sch_base_peak_ratio_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 39, parents: [170], title: "plugload_sch_weekday_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 40, parents: [171], title: "plugload_sch_weekend_base_peak_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 127, parents: [121], title: "heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
 
  { id: 121, parents: [15], title: "hvac_system_type", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 122, parents: [21], title: "hvac_tst_clg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 123, parents: [22], title: "hvac_tst_clg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 124, parents: [7], title: "hvac_tst_htg_delta_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 125, parents: [21], title: "hvac_tst_htg_sp_f", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 126, parents: [25], title: "hvac_night_variability", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 41, parents: [2], title: "purchase_input_responsibility", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 42, parents: [23], title: "region", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 43, parents: [13], title: "rentable_area", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 44, parents: [151], title: "rotation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 45, parents: [16], title: "service_water_heating_fuel", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 46, parents: [6], title: "state_id", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 47, parents: [18], title: "weekday_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 48, parents: [17], title: "weekday_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 49, parents: [20], title: "weekend_duration", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 50, parents: [19], title: "weekend_start_time", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 51, parents: [32,43], title: "window_wall_ratio", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 60, parents: [174], title: "year_bin_of_original_building_construction", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 52, parents: [175], title: "year_bin_of_last_exterior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 53, parents: [176], title: "year_bin_of_last_hvac_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 54, parents: [177], title: "year_bin_of_last_interior_equipment_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 55, parents: [178], title: "year_bin_of_last_interior_lighting_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 56, parents: [179], title: "year_bin_of_last_roof_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 57, parents: [180], title: "year_bin_of_last_service_water_heating_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 58, parents: [181], title: "year_bin_of_last_walls_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  { id: 59, parents: [182], title: "year_bin_of_last_windows_replacement", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 61, parents: [12], title: "year_built", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right}, 
 
  { id: 62, parents: [150], title: "year_of_simulation", itemTitleColor: "#a7e3f4",  groupTitle: "buildstock.csv", placementType: primitives.AdviserPlacementType.Right},
  
 
 
 
  //measures subs
  { id: 63, parents: [62], title: "add_blinds_to_selected_windows", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 64, parents: [126], title: "add_hvac_nighttime_operation_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 65, parents: [122,123,124,125], title: "add_thermostat_setpoint_variability", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 
  { id: 66, parents: [62,86,87], title: "ChangeBuildingLocation", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 
  { id: 67, parents: [33,36,43,44,51,90,91,92,93,94,95,96,35,43,44,51,83,85,86,88,130,202], title: "create_bar_from_building_type_ratios", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
  { id: 68, parents: [33,45,47,48,49,50,90,91,92,93,94,95,96,35,36,45,47,48,49,50,86,121,130,], title: "create_typical_building_from_model", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
 
  { id: 69, parents: [39,40], title: "set_electric_equipment_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
  { id: 70, parents: [33,86,90,97,131], title: "set_exterior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 71, parents: [127], title: "set_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 72, parents: [86,98,132], title: "set_hvac_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 73, parents: [86,92,99], title: "set_interior_equipment_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 74, parents: [27,28], title: "set_interior_lighting_bpr", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 75, parents: [86,100], title: "set_interior_lighting_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 76, parents: [86,93,101], title: "set_roof_template", itemTitleColor: "#d1f7cd", groupTitle: "measure",placementType: primitives.AdviserPlacementType.Right},
  { id: 77, parents: [45], title: "set_service_water_heating_fuel", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 78, parents: [86,94,102], title: "set_service_water_heating_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 79, parents: [62], title: "set_space_type_load_subcategories", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 80, parents: [86,95,103], title: "set_wall_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
  { id: 81, parents: [86,96], title: "set_window_template", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
 
  { id: 82, parents: [62], title: "simulation_settings", itemTitleColor: "#d1f7cd", groupTitle: "measure", placementType: primitives.AdviserPlacementType.Right},
    ],
    annotations: [
      { annotationType: primitives.AnnotationType.Label, fromItem: 6, toItems: [1], title: "48.26%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 6, toItems: [2], title: "24.92%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 6, toItems: [3], title: "26.81%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 7, toItems: [3], title: "37.19%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 7, toItems: [4], title: "69.98%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 7, toItems: [5], title: "0.82%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 8, toItems: [6], title: "98.14%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 8, toItems: [7], title: "1.85%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 9, toItems: [8], title: "100%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 10, toItems: [8], title: "100%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 11, toItems: [8], title: "100%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 12, toItems: [8], title: "100%" },
      { annotationType: primitives.AnnotationType.Label, fromItem: 13, toItems: [8], title: "100%" }
    ]
  };
  
  
  var dataSetNames = {
    "2 Cross Relations": "crossShape",
    "3 Cross Relations": "famdata2",
    "Rombus": "rombusShape",
    "Sand Clock": "sandClockShape",
    "Mix": "famdata",
    "Side By Side": "sideBySide",
    "Skipped Members": "skippedMembers",
    "Horizontal Chain": "horizontalChain",
    "Alignment": "alignmentData",
    "Cascade": "famdataCascade",
    "World Dynamics": "famdataWorld",
    "Inter Marriage": "famdataCharless2",
    "Simple Rombus": "simpleRombus",
    "Simple Sand Clock": "simpleSandClock",
    "W Shape Family": "wFamily",
    "Simple Family": "simpleFamily",
    "Matrix": "matrixLayout",
    "Linked List Loop": "linkedListLoopTest",
    "Inter Linked": "intelinkedNodes",
    "Matrix & Labels": "matrixNLabelsLayout",
    "Matrix Groups": "matrixGroups",
    "Labels Selection": "labelsSelection"
  };
  
  var defaultDataSetName = dataSetNames["Mix"];