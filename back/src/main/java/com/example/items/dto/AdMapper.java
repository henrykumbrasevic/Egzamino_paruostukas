package com.example.items.dto;


import com.example.items.model.Ad;

public class AdMapper {

  public static AdResponseDTO toAdResponseDTO(Ad ad) {
    return new AdResponseDTO(ad.getTitle(), ad.getDescription(), ad.getCity(), ad.getPrice(), ad.getCategories());
  }
}
