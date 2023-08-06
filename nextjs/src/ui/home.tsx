"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, {
  type FormEvent,
  type PropsWithChildren,
  type ReactElement,
  useCallback,
  useState,
} from "react";

import { itemToUser } from "@/lib/service";
import Form from "@/ui/form";
import ItemSelector from "@/ui/item-selector";
import UserSelector from "@/ui/user-selector";

interface Props {
  users: string[];
}

const Home = ({ users }: PropsWithChildren<Props>): ReactElement => {
  const [isError, setIsError] = useState(false);
  const handleFormInvalid = useCallback((event: FormEvent<HTMLFormElement>) => {
    if (!event.currentTarget.checkValidity()) {
      setIsError(true);
      return;
    }
    setIsError(false);
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Form action={itemToUser} onFormInvalid={handleFormInvalid}>
      <FormControl isInvalid={isError}>
        <Stack spacing={2}>
          <Box>
            <FormLabel>ユーザー</FormLabel>
            <UserSelector users={users} name="user" />
          </Box>
          <Box>
            <FormLabel>アイテム</FormLabel>
            <ItemSelector name="itemId" />
          </Box>
          <Box>
            <FormLabel>個数</FormLabel>
            <Input type="number" name="amount" required />
          </Box>
          <Button type="submit">登録</Button>
        </Stack>
      </FormControl>
    </Form>
  );
};

export default Home;
