import { Button } from "@b2io/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@b2io/ui/dialog";
import Link from "next/link";
import { ProfileForm } from "../components/profile-form";

export default function Page(): JSX.Element {
  return (
    <main
      style={{
        alignItems: "center",
        display: "flex",
        gap: "8px",
        flexDirection: "column",
      }}
    >
      <Button>Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ProfileForm />
    </main>
  );
}
