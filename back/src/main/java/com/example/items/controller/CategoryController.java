package com.example.items.controller;

import com.example.items.model.Category;
import com.example.items.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping("/api")
public class CategoryController {

  private final CategoryService categoryService;

  @Autowired
  public CategoryController(CategoryService categoryService) {
    this.categoryService = categoryService;
  }

  @PostMapping("/categories")
  public ResponseEntity<?> addCategory(@RequestBody Category category) {

    if (category.getName().isEmpty()) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Name cannot be empty");
    }

    Category savedCategory = categoryService.saveCategory(category);

    return ResponseEntity.created(
                    ServletUriComponentsBuilder.fromCurrentRequest()
                            .path("/{id}")
                            .buildAndExpand(savedCategory.getId())
                            .toUri())
            .body(savedCategory);
  }


  @DeleteMapping("/categories/{id}")
  public ResponseEntity<Void> deleteCategory(@PathVariable long id) {
    if (!categoryService.existsAdById(id)) {
      return ResponseEntity.notFound().build();
    }
    categoryService.deleteAdById(id);
    return ResponseEntity.noContent().build();
  }

}
