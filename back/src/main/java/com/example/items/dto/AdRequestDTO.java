package com.example.items.dto;

import com.example.items.model.Category;

import java.math.BigDecimal;
import java.util.List;

public record AdRequestDTO(String title, String description, String city, BigDecimal price,
                           String category) {


}
