package com.example.items.service;

import com.example.items.model.Ad;
import com.example.items.repository.AdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdService {

  private final AdRepository adRepository;

  @Autowired
  public AdService(AdRepository adRepository) {
    this.adRepository = adRepository;
  }

  public List<Ad> findAllAds() {
    return adRepository.findAll();
  }

  public boolean existsAdById(long id) {
    return adRepository.existsById(id);
  }

  public Optional<Ad> findAdById(long id) {
    return adRepository.findById(id);
  }

  public Ad saveAd(Ad ad) {
    return adRepository.save(ad);
  }

  public void deleteAdById(long id) {
    adRepository.deleteById(id);
  }

//  public List<Ad> findAllAdsByTitleContaining(String title) {
//    return adRepository.findAllByTitleContaining(title);
//  }

//  public List<Ad> findAllAdsByDescription(String description) {
//    return adRepository.findAllByDescription(description);
//  }

//  public Page<Ad> findAllAdsPage(int page, int size, String sort) {
//    if (sort == null) {
//      Pageable pageable = PageRequest.of(page, size);
//
//      return adRepository.findAll(pageable);
//    }
//
//    Pageable pageable = PageRequest.of(page, size, Sort.by(sort));
//    return adRepository.findAll(pageable);
//  }
}
