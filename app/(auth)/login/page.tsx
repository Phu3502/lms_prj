import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>Đăng nhập với tài khoản của bạn</CardDescription>
        </CardHeader>

        <CardContent>
            <div className="grid gap-3">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@gmail.com"/>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input id="password" type="password" placeholder="Nhập mật khẩu của bạn"/>
              </div>
              <Button>Đăng nhập</Button>
            </div>
        </CardContent>
    </Card>
  );
}