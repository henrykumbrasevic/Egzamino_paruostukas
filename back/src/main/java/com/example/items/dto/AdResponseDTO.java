package com.example.items.dto;

import com.example.items.model.Category;

import java.math.BigDecimal;
import java.util.List;

public record AdResponseDTO(String title, String description, String city, BigDecimal price,
                            List<Category> categories) {


}
