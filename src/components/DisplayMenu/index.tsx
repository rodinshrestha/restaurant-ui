import React from "react";

import styled from "styled-components";

export type DisplayMenuProps = {
  name: string;
  description: string;
  price: string;
  food_type: ("box" | "leaf" | "kids" | "vegan" | "new")[];
};

const MenuItemContainer = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;

const MenuItemName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

const MenuItemDescription = styled.p`
  margin: 0 0 0.5rem 0;
  color: #666;
`;

const MenuItemPrice = styled.span`
  font-weight: 600;
  color: #333;
`;

const FoodTypeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const FoodTypeTag = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const DisplayMenu: React.FC<{ menuList: DisplayMenuProps[] }> = ({
  menuList,
}) => {
  return (
    <div>
      {menuList.map((item) => (
        <MenuItemContainer key={item.name}>
          <MenuItemName>{item.name}</MenuItemName>
          <MenuItemDescription>{item.description}</MenuItemDescription>
          <MenuItemPrice>{item.price}</MenuItemPrice>
          <FoodTypeContainer>
            {item.food_type.map((type) => (
              <FoodTypeTag key={type}>{type}</FoodTypeTag>
            ))}
          </FoodTypeContainer>
        </MenuItemContainer>
      ))}
    </div>
  );
};

export default DisplayMenu;
