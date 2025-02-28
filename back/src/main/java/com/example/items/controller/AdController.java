package com.example.items.controller;

import com.example.items.dto.AdMapper;
import com.example.items.dto.AdRequestDTO;
import com.example.items.dto.AdResponseDTO;
import com.example.items.model.Ad;
import com.example.items.model.Category;
import com.example.items.model.User;
import com.example.items.service.AdService;
import com.example.items.service.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;


@RestController
@RequestMapping("/api/ads_platform")
public class AdController {

  private final AdService adService;
  private final CategoryService categoryService;

  @Autowired
  public AdController(AdService adService, CategoryService categoryService) {
    this.adService = adService;
    this.categoryService = categoryService;
  }

  @GetMapping
  public ResponseEntity<List<Ad>> getAds() {
    return ResponseEntity.ok(adService.findAllAds());
  }

  @PostMapping
  public ResponseEntity<?> createAd(@Valid @RequestBody AdRequestDTO adRequestDTO, Authentication authentication) {
    Ad ad = new Ad();
    User user = new User();
    ad.setTitle(adRequestDTO.title());
    ad.setDescription(adRequestDTO.description());
    ad.setCity(adRequestDTO.city());
    ad.setPrice(adRequestDTO.price());
    ad.setCategories(categoryService.saveCategory(new Category(adRequestDTO.category())));
    adService.saveAd(ad);
    return ResponseEntity.created(ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{id}").buildAndExpand(ad.getId())
                    .toUri())
            .body(AdMapper.toAdResponseDTO(ad));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteAd(@PathVariable long id) {
    if (!adService.existsAdById(id)) {
      return ResponseEntity.notFound().build();
    }
    adService.deleteAdById(id);
    return ResponseEntity.noContent().build();
  }
}

