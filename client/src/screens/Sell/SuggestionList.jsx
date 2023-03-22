import React from "react";
import styled from "styled-components";

const SuggestionListWrapper = styled.div`
  display: grid;
  grid-column: 1/3;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const ListBox = styled.ul`
  display: flex;
  gap: 1rem;
  border-color: rgba(0, 0, 0, 0);
  overflow-x: scroll;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    background: none;
    height: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #386950;
    border-radius: 10px;
  }

  & .mainLi {
    list-style: none;
  }
  & .liWrapper {
    background-color: #ccfdce;
    padding: 1rem;
    border-radius: 15px;
    width: 30rem;
    height: 13rem;
    & ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media (max-width: 600px) {
      width: 15rem;
      height: 20rem;
    }
  }
  & .suggestion {
    font-size: 13px;
  }
`;

const SuggestionList = () => {
  return (
    <SuggestionListWrapper>
      <h3>Here’s five ways to set yourself up for success.</h3>
      <ListBox>
        <li className="mainLi">
          <div className="liWrapper">
            <h3>Write a standout title</h3>
            <ul>
              <li className="suggestion">
                We’ll recommend search terms that buyers often use, so be sure
                to add these in the title.
              </li>
              <li className="suggestion">
                Avoid all caps and focus on specific details like brand, model,
                size, and color.
              </li>
            </ul>
          </div>
        </li>
        <li className="mainLi">
          <div className="liWrapper">
            <h3>Take high-quality photos</h3>
            <ul>
              <li className="suggestion">
                Snap your items from multiple angles in a well-lit place, and
                capture any blemishes for transparency.
              </li>
              <li className="suggestion">
                On the greenBay app, you can clean up your images and add a
                white background.
              </li>
            </ul>
          </div>
        </li>
        <li className="mainLi">
          <div className="liWrapper">
            <h3>Pick a purchase format</h3>
            <ul>
              <li className="suggestion">
                If you want to sell your item quickly, Buy it Now is probably
                the best format for you.
              </li>
              <li className="suggestion">
                Otherwise, if you want to try your luck and shoot for the best
                possible price, choose Auction.
              </li>
            </ul>
          </div>
        </li>
        <li className="mainLi">
          <div className="liWrapper">
            <h3>Set the right price</h3>
            <ul>
              <li className="suggestion">
                We will recommend a price based on recent sales of similar
                items.
              </li>
              <li className="suggestion">
                You can even watch how other sellers are pricing their items, or
                use Best Offer to negotiate and sell faster.
              </li>
            </ul>
          </div>
        </li>
        <li className="mainLi">
          <div className="liWrapper">
            <h3>Ship with ease</h3>
            <ul>
              <li className="suggestion">
                We provide recommendations for delivery, but to save on
                shipping, use an eBay delivery label.
              </li>
              <li className="suggestion">
                Plus, if you’re selling locally, you can also offer Local
                Pickup.
              </li>
            </ul>
          </div>
        </li>
      </ListBox>
    </SuggestionListWrapper>
  );
};

export default SuggestionList;
