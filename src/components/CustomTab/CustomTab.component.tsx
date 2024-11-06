import { Button, Stack, styled } from "@mui/material";
import { useState } from "react";
import { colors } from "../../theme/palette";

interface IProps {
  items: {
    label: string;
    component: React.ReactNode;
  }[];
}

const CustomTab = ({ items }: IProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <Wrapper gap={3}>
      <WrapperTabs>
        <Line />
        {items.map((item, idx) => (
          <Button
            variant={idx === selectedTab ? "tab-selected" : "tab"}
            onClick={() => setSelectedTab(idx)}
          >
            {item.label}
          </Button>
        ))}
      </WrapperTabs>
      {items[selectedTab].component}
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  padding: 30px 50px;
`;

const WrapperTabs = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

const Line = styled(Stack)`
  height: 1px;
  width: 100%;
  background: ${colors.secondary};
  position: absolute;
  top: 19px;
`;

export default CustomTab;
