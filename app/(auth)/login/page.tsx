import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>Đăng nhập với tài khoản của bạn</CardDescription>
        </CardHeader>

        <CardContent>
            <Button className="w-full" variant={"outline"}>Đăng nhập</Button>
        </CardContent>
    </Card>
  );
}