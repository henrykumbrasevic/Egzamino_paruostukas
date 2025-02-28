package com.example.items.model;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "ads") //
public class Ad {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String title;
  private String description;
  private BigDecimal price;
  private String city;

  @ManyToMany
  @JoinTable(
          name = "ads_categories",
          joinColumns = @JoinColumn(name = "ad_id"),
          inverseJoinColumns = @JoinColumn(name = "category_id"))
  private List<Category> categories;

  @Autowired
  public Ad(String title, String description, BigDecimal price, String city, List<Category> categories) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.city = city;
    this.categories = List.of();
  }

  public Ad() {

  }

  public long getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public BigDecimal getPrice() {
    return price;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  public List<Category> getCategories() {
    return categories;
  }

  public void setCategories(List<Category> categories) {
    this.categories = categories;
  }
}
