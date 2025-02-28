package com.example.items.repository;

import com.example.items.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface AdRepository extends JpaRepository<Ad, Long> {
}
