import React, { createContext, useContext, useState } from 'react';

type GoalContextData = {
  goal: GoalProps[];
  handleSetGoal: (goal: GoalProps) => void;
  getGoal: () => GoalProps[];
};

type GoalProps = {
  image: string;
  name: string;
  portion: number;
  value: number;
};

const GoalContext = createContext<GoalContextData>({} as GoalContextData);

export function useGoal(): GoalContextData {
  const context = useContext(GoalContext);

  if (!context) {
    throw new Error('useGoal must be used within a GoalProvider');
  }

  return context;
}

export const GoalProvider: React.FC = ({ children }) => {
  const [goal, setGoal] = useState<GoalProps[]>([]);

  function handleSetGoal(newGoal: GoalProps) {
    setGoal([...goal, newGoal]);
  }

  function getGoal() {
    return goal;
  }

  return (
    <GoalContext.Provider value={{ goal, handleSetGoal, getGoal }}>
      {children}
    </GoalContext.Provider>
  );
};
