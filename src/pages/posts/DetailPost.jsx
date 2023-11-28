/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/display-name
import { memo, useState } from "react";

const DetailPost = memo((props) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className="w-full bg-blue-200">
      <div className="pt-8 ml-8">
        <h2 className="font-bold text-3xl">Posts / Detail</h2>
        <div className="pr-8 mt-4">
          <div>
            <div className="grid grid-cols-12 gap-8 mb-4">
              <div className="col-span-4">
                <div>
                  <div className={`bg-home w-full h-[300px]`}></div>
                  <div className="grid grid-cols-4 h-20 gap-2 mt-4">
                    <div className={`bg-home h-full rounded-md`}></div>
                    <div className={`bg-home h-full rounded-md`}></div>
                    <div className={`bg-home h-full rounded-md`}></div>
                    <div className={`bg-home h-full rounded-md`}></div>
                  </div>
                </div>
              </div>
              <div className="col-span-8">
                <div>
                  <div className="text-red-600 text-2xl mb-4">
                    <p>
                      Phòng Master Tolet riêng Căn hộ Chung cư Era Town Đức
                      Khải, Phường Phú Mỹ, Quận 7
                    </p>
                  </div>
                  <p className="mb-4">
                    Cần bán gấp đồng hồ như mẫu, giá cả thương lượng
                  </p>
                  <p className="text-red-600 font-bold text-3xl mb-4">
                    2.100.000 đ
                  </p>
                  <div className="bg-white rounded-lg p-8">
                    <p className="font-bold mb-4">Seller</p>
                    <div className="grid grid-rows-2 grid-cols-2 mb-4 gap-4">
                      <div>
                        <p>Full Name</p>
                        <p>Nguyễn Văn Anh</p>
                      </div>
                      <div>
                        <p>Full Name</p>
                        <p>Nguyễn Văn Anh</p>
                      </div>
                      <div>
                        <p>Full Name</p>
                        <p>Nguyễn Văn Anh</p>
                      </div>
                      <div>
                        <p>Full Name</p>
                        <p>Nguyễn Văn Anh</p>
                      </div>
                    </div>
                    <div>
                      <button className="w-full block rounded-lg bg-gray-400 py-2">
                        Conttact Seller
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg h-[300px]">
              <p className="font-bold text-2xl text-[#25BEB9]">Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident doloribus vero voluptate iure libero totam officia
                reiciendis ullam culpa vel minima, maxime expedita odio nostrum
                quod aperiam? Natus nam modi cum repellendus rerum, cupiditate
                reprehenderit illo dolore sit repudiandae in corporis. Harum
                voluptas nemo nesciunt, consequatur totam sint. Non, nemo odio!
                Illum sed praesentium nulla vitae cumque aspernatur magnam
                alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, corporis necessitatibus. Saepe voluptas totam est
                natus in possimus doloribus. Ullam consequatur recusandae iste
                dolorum perspiciatis possimus doloribus error quasi quia eius.
                Sed quidem alias modi. Vitae beatae assumenda perferendis labore
                velit maiores excepturi molestiae fugit blanditiis. Blanditiis
                tenetur natus architecto quis voluptate eius ad, tempora dolorum
                nulla temporibus ipsum perferendis quas quos repellat. Maiores
                aliquam, soluta, velit laborum nisi fugiat ea quidem consectetur
                nulla accusamus fugit tempore natus quibusdam molestiae omnis
                pariatur obcaecati temporibus quam quasi laudantium?
                Necessitatibus repellat, officia omnis vitae ab suscipit placeat
                maxime eaque voluptate itaque esse cum nostrum culpa debitis qui
                vero fugiat doloribus consectetur consequuntur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DetailPost;
