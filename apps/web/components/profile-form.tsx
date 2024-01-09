"use client";

import { Button } from "@b2io/ui/button";
import { Box } from "@b2io/ui/box";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@b2io/ui/form";
import { Input } from "@b2io/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@b2io/ui/card";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
});

function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: { username: "" },
    resolver: zodResolver(formSchema),
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log("values", values);
  }

  return (
    <Form {...form}>
      <Card>
        <CardHeader>
          <CardTitle>Create profile</CardTitle>
          <CardDescription>
            Setup your personal details for your new account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Box asChild display="flex" flexDirection="column" gap={8}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="b2io" />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                  </FormItem>
                )}
              />
            </form>
          </Box>
        </CardContent>
        <CardFooter display="flex" justifyContent="space-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Create</Button>
        </CardFooter>
      </Card>
    </Form>
  );
}

export { ProfileForm };
