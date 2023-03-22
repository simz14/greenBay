import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";

const SideContainer = styled.div`
  display: grid;
  gap: 1rem;
  & .MuiListItemIcon-root {
    min-width: 1.5rem;
  }

  & .MuiListItemButton-root {
    border-radius: 5px;
  }
  @media (max-width: 800px) {
    & .MuiList-root {
      display: flex;
    }
    & .MuiListItemButton-root {
      padding: 0px;
      display: grid;
      max-width: 8rem;
      grid-template-columns: 1fr 1fr;
      padding: 0 0.5rem;
      border-radius: 5px;
    }
    & .MuiTypography-root {
      font-size: 11px;
    }
    & .MuiListItem-root {
      justify-content: center;
    }
  }
`;

const ProfileSideBar = ({ showAccount, showSelling, showPurchases }) => {
  return (
    <SideContainer>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem onClick={() => showAccount(true)} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BiUser />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => showSelling(true)} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdOutlineSell />
              </ListItemIcon>
              <ListItemText primary="Selling" />
            </ListItemButton>
          </ListItem>{" "}
          <ListItem onClick={() => showPurchases(true)} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BsCartCheck />
              </ListItemIcon>
              <ListItemText primary="Purchases" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </SideContainer>
  );
};
export default ProfileSideBar;
