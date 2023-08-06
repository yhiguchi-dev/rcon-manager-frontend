"use client";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import {
  type ChangeEvent,
  type FormEvent,
  type ReactElement,
  useCallback,
  useRef,
  useState,
} from "react";

import { service } from "@/lib/service";
import Form from "@/ui/form";
import ItemSelector from "@/ui/item-selector";
import UserSelector from "@/ui/user-selector";

const Home = (): ReactElement => {
  const userRef = useRef<HTMLSelectElement>(null);
  const itemIdRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState(false);
  const handleAmountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setIsError(!event.currentTarget.checkValidity());
    },
    [],
  );
  // const { fn: handleSubmit } = useDoubleClickPrevention(
  //   async (event: FormEvent<HTMLFormElement>): Promise<void> => {
  //     if (
  //       userRef.current !== null &&
  //       itemIdRef.current !== null &&
  //       amountRef.current !== null
  //     ) {
  //       await backendApi.postItemToUser({
  //         user: userRef.current.value,
  //         itemId: itemIdRef.current.value,
  //         amount: parseInt(amountRef.current.value, 10),
  //       });
  //     }
  //     console.log(event);
  //   },
  // );
  const handleFormInvalid = useCallback((event: FormEvent<HTMLFormElement>) => {
    if (!event.currentTarget.checkValidity()) {
      setIsError(true);
      return;
    }
    setIsError(false);
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Form action={service.itemToUser} onFormInvalid={handleFormInvalid}>
      <FormControl isInvalid={isError}>
        <Stack spacing={2}>
          <Box>
            <FormLabel>ユーザー</FormLabel>
            <UserSelector ref={userRef} name="user" />
          </Box>
          <Box>
            <FormLabel>アイテム</FormLabel>
            <ItemSelector ref={itemIdRef} name="itemId" />
          </Box>
          <Box>
            <FormLabel>個数</FormLabel>
            <Input
              type="number"
              onChange={handleAmountChange}
              ref={amountRef}
              name="amount"
              required
            />
          </Box>
          <Button type="submit">登録</Button>
        </Stack>
      </FormControl>
    </Form>
  );
};

export default Home;
